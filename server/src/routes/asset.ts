import express, {Request, Response} from 'express'
import {body} from 'express-validator'
import User from '../models/user'
import UserNotFoundError from '../errors/user-not-found-error'
import Asset from '../models/asset'
import AssetNotFoundError from '../errors/asset-not-found-error'
import validateRequest from '../middlewares/validate-request'

const router = express.Router()

router.get('/api/assets', async (req: Request, res: Response) => {
    const assets = await Asset.findAll()
    res.status(200).json(assets)
})

router.get('/api/assets/:assetId/users', async (req: Request, res: Response) => {
    const assetId = req.params!.assetId
    const asset = await Asset.findByPk(assetId)
    if (!asset) {
        throw new AssetNotFoundError()
    }
    //@ts-ignore
    const users = await asset.getUsers()
    res.status(200).json(users)
})

router.get('/api/users/:userId/assets', async (req: Request, res: Response) => {
    const userId = req.params!.userId
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const assets = await user.getAssets()
    res.status(200).json(assets)
})

router.post('/api/users/:userId/assets', [
    body('assetId')
    .notEmpty()
    .isNumeric()
    .withMessage('Invalid asset id')
], validateRequest, async (req: Request, res: Response) => {
    const userId = req.params!.userId
    const assetId = req.body.assetId
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    const asset = await Asset.findByPk(assetId)
    if (!asset) {
        throw new AssetNotFoundError()
    }
    //@ts-ignore
    await user.addAsset(asset)
    res.status(200).json({message: 'Asset has been successfully added'})
})

export default router