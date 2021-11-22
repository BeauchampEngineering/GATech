import express, {Request, Response} from 'express'
import {body} from 'express-validator'
import bcrypt from 'bcryptjs'
import validateRequest from '../middlewares/validate-request'
import User from '../models/user'
import UserNotFoundError from '../errors/user-not-found-error'

const router = express.Router()

router.get('/api/users', async (req: Request, res: Response) => {
    const users = await User.findAll({where: {isAdmin: false}})
    res.status(200).json(users)
})

router.post('/api/users', [
    body('email')
    .isEmail()
    .withMessage('Email is invalid')
    .custom(async (value, {req}) => {
        const email = req.body.email
        const user = await User.findOne({where: {email}})
        return user ? Promise.reject() : true
    })
    .withMessage('Email is taken'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is not empty')
    .custom((value, {req}) => {
        const password = req.body.password
        const confirmPassword = req.body.confirmPassword
        return password === confirmPassword
    })
    .withMessage('Passwords do not match')
], validateRequest, async (req: Request, res: Response) => {
    const {email, password} = req.body
    const passwordHash = await bcrypt.hash(password, 12)
    const user = await User.create({email, passwordHash})
    res.status(201).json(user)
})

router.put('/api/users/:userId', [
    body('email')
    .isEmail()
    .withMessage('Email is invalid')
    .custom(async (value, {req}) => {
        const userId = req.params!.userId
        const email = req.body.email
        const user = await User.findOne({where: {email}})
        return user && user.id !== userId ? Promise.reject() : true
    })
    .withMessage('Email is taken'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is not empty')
    .custom((value, {req}) => {
        const password = req.body.password
        const confirmPassword = req.body.confirmPassword
        return password === confirmPassword
    })
    .withMessage('Passwords do not match')
], validateRequest, async (req: Request, res: Response) => {
    const userId = req.params!.userId
    const {email, password} = req.body
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    user.email = email
    if (password) {
        user.passwordHash = await bcrypt.hash(password, 12)
    }
    await user.save()
    res.status(200).json(user)
})

router.delete('/api/users/:userId', async (req: Request, res: Response) => {
    const userId = req.params!.userId
    const user = await User.findByPk(userId)
    await user?.destroy()
    res.status(200).json({message: 'User successfully deleted'})
})

export default router