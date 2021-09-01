import express, {Request, Response} from 'express'
import User from '../models/user'
import UserNotFoundError from '../errors/user-not-found-error'
import AssetNotFoundError from '../errors/asset-not-found-error'
import Log from '../models/log'
import LogNotFoundError from '../errors/log-not-found-error'
import { body } from 'express-validator'
import validateRequest from '../middlewares/validate-request'

const router = express.Router()

router.get('/api/users/:userId/assets/:assetId/logs', async (req: Request, res: Response) => {
    const userId = req.params!.userId
    const assetId = req.params!.assetId
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const asset = await user.getAssets({where: {id: assetId}})
    if (!asset) {
        throw new AssetNotFoundError()
    }
    //@ts-ignore
    const logs = await Log.findAll({where: {assetId, deleted: false}})
    res.status(200).json(logs)
})

router.post('/api/users/:userId/assets/:assetId/logs', [
    body('message')
    .notEmpty()
    .withMessage('Message must not be empty')
], validateRequest, async (req: Request, res: Response) => {
    const userId = req.params!.userId
    const assetId = req.params!.assetId
    const {message} = req.body
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const asset = await user.getAssets({where: {id: assetId}})
    if (!asset) {
        throw new AssetNotFoundError()
    }
    //@ts-ignore
    const log = await Log.create({assetId, userId, message})
    res.status(200).json(log)
})

router.put('/api/users/:userId/assets/:assetId/logs/:logId', [
    body('message')
    .notEmpty()
    .withMessage('Message must not be empty')
], validateRequest, async (req: Request, res: Response) => {
    const {userId, assetId, logId} = req.params
    const {message} = req.body
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const asset = await user.getAssets({where: {id: assetId}})
    if (!asset) {
        throw new AssetNotFoundError()
    }
    //@ts-ignore
    const oldLog = await Log.findByPk(logId)
    if(!oldLog) {
        throw new LogNotFoundError()
    }
    oldLog.deleted = true
    oldLog.save()
    //@ts-ignore
    const newLog = await Log.create({assetId, userId, message})
    res.status(200).json(newLog)
})

router.delete('/api/users/:userId/assets/:assetId/logs/:logId', async (req: Request, res: Response) => {
    const {userId, assetId, logId} = req.params
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const asset = await user.getAssets({where: {id: assetId}})
    if (!asset) {
        throw new AssetNotFoundError()
    }
    //@ts-ignore
    const log = await Log.findOne({where: {id: logId, assetId}})
    if(!log) {
        throw new LogNotFoundError()
    }
    log.deleted = true
    log.save()
    res.status(200).json({message: 'Log successfully deleted'})
})

export default router