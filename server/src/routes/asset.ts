import express, {Request, Response} from 'express'
import {Op} from 'sequelize'
import {body} from 'express-validator'
import UserNotFoundError from '../errors/user-not-found-error'
import AssetNotFoundError from '../errors/asset-not-found-error'
import validateRequest from '../middlewares/validate-request'
import {User, Asset, Log} from '../models'

const router = express.Router()

router.get('/api/assets', async (req: Request, res: Response) => {
    let assets
    const search = req.query.search
    if (search) {
        const logs = await Log.findAll({
            where: {
                message: {
                    [Op.substring]: search + ''
                }
            },
            attributes: ['assetId']
        })
        //@ts-ignore
        const assetIds = logs.map(l => l.assetId)
        assets = await Asset.findAll({
            where: {
                [Op.or]: [
                    {name: {[Op.substring]: search + ''}},
                    {id: {[Op.or]: assetIds}}
                ]
            }
        })
    } else {
        assets = await Asset.findAll()
    }
    res.status(200).json(assets)
})

router.post('/api/assets', [
    body('name')
    .notEmpty()
], validateRequest, async (req: Request, res: Response) => {
    const {name} = req.body
    const asset = await Asset.create({name})
    res.status(201).json(asset)
})

router.get('/api/assets/:assetId', async (req: Request, res: Response) => {
    const assetId = req.params.assetId
    const asset = await Asset.findByPk(assetId)
    res.status(200).json(asset)
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