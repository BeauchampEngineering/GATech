import express, { Request, Response } from 'express'
import { Asset, Log, User, UserAsset } from '../models'

const router = express.Router()
router.post('/sap/import', async (req: Request, res: Response) => {
    const {users, assets, logs, userAssets} = req.body
    try {
        console.log(req.body)
        await User.bulkCreate(users)
        console.log(1)
        await Asset.bulkCreate(assets)
        console.log(2)
        await Log.bulkCreate(logs)
        console.log(3)
        // await UserAsset.bulkCreate(userAssets)
        // console.log(45)
    } catch(e) {
        console.error(e)
    }
    res.status(201).json({message: 'SAP Imported Successfully'})
})

router.get('/sap/export', async (req: Request, res: Response) => {
    const users = await User.findAll({attributes: {exclude: ['passwordHash']}})
    const assets = await Asset.findAll({attributes: {exclude: ['identifier']}})
    const logs = await Log.findAll()
    const userAssets = await UserAsset.findAll()
    res.status(200).json({users, assets, logs, userAssets})
})

export default router