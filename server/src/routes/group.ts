import express, {Request, Response} from 'express'
import {body} from 'express-validator'
import GroupNotFoundError from '../errors/group-not-found-error'
import UserNotFoundError from '../errors/user-not-found-error'
import {Group, User} from '../models'

const router = express.Router()

router.post('/api/groups', [
    body('name')
    .trim()
    .notEmpty()
    .withMessage('Group name is invalid'),
    body('userIds')
    .isArray({min: 2})
], async (req: Request, res: Response) => {
    const {name, userIds} = req.body
    const group = await Group.create({name})
    userIds.forEach(async (id: number) => {
        const user = await User.findByPk(id)
        if (!user) {
            await group.destroy()
            throw new Error('Invalid user')
        }
        //@ts-ignore
        await group.addUser(user)
    })
    res.status(201).json(group)
})

router.delete('/api/groups/:groupId', async (req: Request, res: Response) => {
    const groupId = req.params!.groupId
    const group = await Group.findByPk(groupId)
    if (!group) {
        throw new GroupNotFoundError()
    }
    await group.destroy()
    res.status(200).json({message: 'Group successfully deleted'})
})

router.get('/api/users/:userId/groups', async (req: Request, res: Response) => {
    const userId = req.params!.userId
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const groups = await user.getGroups()
    res.status(200).json(groups)
})

router.get('/api/users/:userId/groups/:groupId', async (req: Request, res: Response) => {
    const {userId, groupId} = req.params
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const group = (await user.getGroups({where: {id: groupId}})).find(g => g)
    if (!group) {
        throw new GroupNotFoundError()
    }
    res.status(200).json(group)
})

router.get('/api/users/:userId/groups/:groupId/messages', async (req: Request, res: Response) => {
    const {userId, groupId} = req.params
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    const group = await Group.findByPk(groupId)
    if (!group) {
        throw new GroupNotFoundError()
    }
    //@ts-ignore
    const messages = await group.getMessages()
    res.status(200).json(messages)
})

export default router 


