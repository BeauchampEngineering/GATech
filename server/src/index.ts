import 'express-async-errors'
import dotenv from 'dotenv'
import express, {Request, Response} from 'express'
import {createServer} from 'http'
import {Server, Socket} from 'socket.io'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import sequelize from './databases/sql'
import {User, Asset, Log, Group, UserAsset, UserGroup} from './models'
import {authRoutes, userRoutes, assetRoutes, logRoutes, groupRoutes, sapRoutes, streamRoutes} from './routes'
import RouteNotFoundError from './errors/route-not-found-error'
import errorHandler from './middlewares/error-handler'
import Message from './models/message'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', async (req: Request, res: Response) => {
    res.status(200).json({message: 'Ready to Accept Requests'})
})

app.use(authRoutes)
app.use(userRoutes)
app.use(assetRoutes)
app.use(logRoutes)
app.use(groupRoutes)
app.use(sapRoutes)
app.use(streamRoutes)

app.all('*', async () => {
    throw new RouteNotFoundError()
})

app.use(errorHandler)

// database relationships
User.belongsToMany(Asset, {through: UserAsset})
Asset.belongsToMany(User, {through: UserAsset})
User.belongsToMany(Group, {through: UserGroup})
Group.belongsToMany(User, {through: UserGroup})
Asset.hasMany(Log)
Log.belongsTo(Asset)
Group.hasMany(Message)
Message.belongsTo(Group)
User.hasMany(Message)
Message.belongsTo(User)

const httpServer = createServer(app)
const io = new Server(httpServer, {cors: {origin: '*'}})
io.on('connection', (socket: Socket) => {
    socket.on('join-asset', async (room: string) => {
        const asset = await Asset.findByPk(room)
        if (!asset) {
            console.log('Asset not found')
        } else {
            socket.join(asset.identifier!)
        }
    })
    socket.on('join-group', async (room: string) => {
        const group = await Group.findByPk(room)
        if (!group) {
            console.log('Group not found')
        } else {
            socket.join(group.identifier!) 
        }
    })
    socket.on('message', async (packet: {room: string, message: string, userId: number}) => {
        const group = await Group.findByPk(packet.room)
        if (!group) {
            console.log('Group not found')
        } else {
            //@ts-ignore
            const message = await group.createMessage({
                message: packet.message,
                userId: packet.userId
            })
            socket.nsp.to(group.identifier!).emit('message', message)
        }
    })
    socket.on('fault', async (packet: {id: string, userId: number}) => {
        const asset = await Asset.findByPk(packet.id)
        if (!asset) {
            console.log('Asset not found')
        } else {
            asset.fault = true
            await asset.save()
            const message = `asset ${asset.id} has been faulted`
            //@ts-ignore
            await asset.createLog({
                userId: packet.userId,
                message: message
            })
            socket.nsp.to(asset.identifier!).emit('fault', message)
        }
    })
    socket.on('fix', async (packet: {id: string, userId: number}) => {
        const asset = await Asset.findByPk(packet.id)
        if (!asset) {
            console.log('Asset not found')
        } else {
            asset.fault = false
            await asset.save()
            const message = `asset ${asset.id} has been fixed`
            //@ts-ignore
            await asset.createLog({
                userId: packet.userId,
                message: message
            })
            socket.nsp.to(asset.identifier!).emit('fix', message)
        }
    })
    socket.on('leave-asset', async (room: string) => {
        const asset = await Asset.findByPk(room)
        if (!asset) {
            console.log('Asset not found')
        } else {
            socket.leave(room)
        }
    })
    socket.on('leave-group', async (room: string) => {
        const group = await Group.findByPk(room)
        if (!group) {
            console.log('Group not found')
        } else {
            socket.leave(room) 
        }
    })
    socket.on('disconnect', (msg: string) => {
        console.log(msg)
    })
})


const populate = async () => {
    const isAdmin = true
    const email = 'admin@admin.com'
    const passwordHash = await bcrypt.hash('admin', 12)
    const user1 = await User.create({email, passwordHash, isAdmin})
    const user2 = await User.create({email: 'ye@ye.com', passwordHash})
    const user3 = await User.create({email: 'donda@donda.com', passwordHash})
    const asset1 = await Asset.create({name: 'test1'})
    const asset2 = await Asset.create({name: 'test2'})
    //@ts-ignore
    user1.addAsset(asset1)
    //@ts-ignores
    await asset1.createLog({
        userId: user1.id, 
        message: 'test message'
    })
    //@ts-ignore
    await asset1.createLog({
        userId: user1.id, 
        message: 'test message2'
    })
    const group = await Group.create({name: 'test group'})
    //@ts-ignore
    await group.addUser(user1)
    //@ts-ignore
    await group.addUser(user2)
    //@ts-ignore
    await group.addUser(user3)

}

const start = async () => {
    try {
        await sequelize.sync({force: true})
        console.log('Connected to DB')
    } catch (err) {
        console.error(err);
    }
    await populate()
    const PORT = process.env.PORT || 3000
    httpServer.listen(PORT, () => console.log(`Listening on ${PORT}`))
};

start()