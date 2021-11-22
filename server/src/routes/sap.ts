//@ts-nocheck
import express, { Request, Response } from 'express'
import multer from 'multer'
import * as csv from 'fast-csv'
import fs from 'fs'
import { parse } from 'json2csv'
import { Asset, Log, User, UserAsset } from '../models'

const router = express.Router()
const upload = multer({dest: '../tmp/csv/'})

router.post('/sap/import', upload.fields([{
    name: 'asset', 
    maxCount: 1
}, {
    name: 'log',
    maxCount: 1
}, {
    name: 'user',
    maxCount: 1
}, {
    name: 'userAsset',
    maxCount: 1
}]), (req: Request, res: Response) => {
    if (!req.files.asset || !req.files.log || !req.files.user || !req.files.userAsset) {
        throw new Error('Missing files')
    }
    csv.parseFile(req.files.asset[0].path, {headers: true, ignoreEmpty: true})
        .on('data', data => Asset.create(data))
        .on('end', () => fs.unlink(req.files.asset[0].path))
    csv.parseFile(req.files.log[0].path, {headers: true, ignoreEmpty: true})
        .on('data', data => Log.create(data))
        .on('end', () => fs.unlink(req.files.log[0].path))
    csv.parseFile(req.files.user[0].path, {headers: true, ignoreEmpty: true})
        .on('data', data => User.create(data))
        .on('end', () => fs.unlink(req.files.user[0].path))   
    csv.parseFile(req.files.userAsset[0].path, {headers: true, ignoreEmpty: true})
        .on('data', data => UserAsset.create(data))
        .on('end', () => fs.unlink(req.files.userAsset[0].path))  
    res.json({message: 'SAP File Sucessfully Imported'})
})

router.get('/sap/export', async (req: Request, res: Response) => {
    const users = await User.findAll({attributes: {exclude: ['passwordHash']}})
    const assets = await Asset.findAll({attributes: {exclude: ['identifier']}})
    const logs = await Log.findAll()
    const userAssets = await UserAsset.findAll()
    const userFields = Object.keys(User.rawAttributes)
    const assetFields = Object.keys(Asset.rawAttributes)
    const logFields = Object.keys(Log.rawAttributes)
    const userAssetFields = Object.keys(UserAsset.rawAttributes)
    const userCsv = parse(users, {fields: userFields})
    const assetCsv = parse(assets, {fields: assetFields})
    const logCsv = parse(logs, {fields: logFields})
    const userAssetCsv = parse(userAssets, {fields: userAssetFields})
    res.status(200).json({userCsv, assetCsv, logCsv, userAssetCsv})
})

export default router