import 'express-async-errors'
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import sequelize from './databases/sql'
import {User, Asset, Log, Group} from './models'
import {authRoutes, userRoutes, assetRoutes, logRoutes, groupRoutes} from './routes'
import RouteNotFoundError from './errors/route-not-found-error'
import errorHandler from './middlewares/error-handler'
import Message from './models/message'


const app = express()

app.use(cors())
app.use(express.json())

app.use(authRoutes)
app.use(userRoutes)
app.use(assetRoutes)
app.use(logRoutes)
app.use(groupRoutes)

app.all('*', async () => {
    throw new RouteNotFoundError()
});

app.use(errorHandler)

// database relationships
User.belongsToMany(Asset, {through: 'UserAssets'})
Asset.belongsToMany(User, {through: 'UserAssets'})
User.belongsToMany(Group, {through: 'UserGroups'})
Group.belongsToMany(User, {through: 'UserGroups'})
Asset.hasMany(Log)
Log.belongsTo(Asset)
Group.hasMany(Message)
Message.belongsTo(Group)
User.hasMany(Message)
Message.belongsTo(User)


const populate = async () => {
    const isAdmin = true
    const email = 'admin@admin.com'
    const passwordHash = await bcrypt.hash('admin', 12)
    await User.create({email, passwordHash, isAdmin})
    await User.create({email: 'ye@ye.com', passwordHash})
    await User.create({email: 'donda@donda.com', passwordHash})
    await Asset.create({name: 'test1'})
    await Asset.create({name: 'test2'})
}

const start = async () => {
    try {
        await sequelize.sync({force: true})
        console.log('Connected to MySQL')
    } catch (err) {
        console.error(err);
    }
    await populate()
    app.listen(3000, () => console.log('Listening on 3000'))
};

start()