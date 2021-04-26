import express, { Router } from 'express'
import 'express-async-errors'
import mongoose from 'mongoose'
import User from './models/user'
import loginRoute from './routes/login'
import logoutRoute from './routes/logout'
import errorHandler from './middlewares/error-handler'
import RouteNotFoundError from './errors/route-not-found-error'

const app = express()

app.use(express.json())

app.use(loginRoute)
app.use(logoutRoute)
app.all('*', async () => {
    throw new RouteNotFoundError()
})

app.use(errorHandler)

const start = async () => {
    try {
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('Connected to MongoDB')
    } catch(err) {
        console.error(err)
    }
    const user = User.build({email: 'admin@admin.com', password: 'admin'})
    await user.save()
    app.listen(3000, () => console.log('Listening on 3000'))
}

start()
