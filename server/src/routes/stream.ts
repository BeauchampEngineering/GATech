import express, {Request, Response} from 'express'
import UserNotFoundError from '../errors/user-not-found-error'
import { Asset, Log, User } from '../models'

const router = express.Router()

router.post('/api/stream', async (req: Request, res: Response) => {
    const {userId} = req.body
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const assets = await user.getAssets()
    //@ts-ignore
    const assetIds = assets.map(a => a.id)
    const logs = await Log.findAll({order: [['updatedAt', 'DESC']], include: [{
        model: Asset,
        where: {
            id: assetIds
        }
    }]})
    res.status(200).json(logs)
})

export default router