import express, {Request, Response} from 'express'

const router = express.Router()

router.get('/auth/logout', (req: Request, res: Response) => {
    res.status(200).json({message: 'Logged out'})
})

export default router