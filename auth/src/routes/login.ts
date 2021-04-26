import express, {Request, Response} from 'express'
import {body} from 'express-validator'
import validateRequest from '../middlewares/validate-request'
import User from '../models/user'

const router = express.Router()

router.post('/auth/login', [
    body('email')
    .isEmail()
    .withMessage('Email is invalid'),
    body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is not empty')
], validateRequest, async (req: Request, res: Response) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(!user || password != user.password) {
        throw new Error('Invalid credentials')
    }
    res.status(200).json(user)
})

export default router;