import 'express-async-errors'
import express, {Request, Response} from 'express'
import {body} from 'express-validator'
import GroupNotFoundError from '../errors/group-not-found-error'
import UserNotFoundError from '../errors/user-not-found-error'
import {Group, User} from '../models'
import validateRequest from '../middlewares/validate-request'

const router = express.Router()

router.get('/api/groups', async (req: Request, res: Response) => {
    const groups = await Group.findAll({include: {model: User, attributes: ['id', 'email']}})
    res.status(200).json(groups)
})

router.post('/api/groups', [
    body('name')
    .trim()
    .notEmpty()
    .withMessage('Group name is invalid'),
    body('userIds')
    .isArray({min: 2})
], validateRequest, async (req: Request, res: Response) => {
    const {name, userIds} = req.body
    const group = await Group.create({name})
    for (let id of userIds) {
        const user = await User.findByPk(id)
        if (!user) {
            await group.destroy()
            throw new UserNotFoundError()
        }
        //@ts-ignore
        await group.addUser(user)
    }
    res.status(201).json(group)
})

router.post('/api/groups/:groupId/users', async (req: Request, res: Response) => {
    const groupId = req.params!.groupId
    const userId = req.body.userId
    const group = await Group.findByPk(groupId)
    if (!group) {
        throw new GroupNotFoundError()
    }
    const user = await User.findByPk(userId)
    if (!user) {
        throw new Error('Invalid user')
    }
    //@ts-ignore
    await group.addUser(user)
    res.status(200).json(user)
})

router.put('/api/groups/:groupId', async (req: Request, res: Response) => {
    const groupId = req.params!.groupId
    const {userIds} = req.body
    const group = await Group.findByPk(groupId)
    if (!group) {
        throw new GroupNotFoundError()
    }
    userIds.forEach(async (id: number) => {
        const user = await User.findByPk(id)
        if (!user) {
            throw new UserNotFoundError()
        }
        //@ts-ignore
        await group.addUser(user)
    })
    res.status(200).json(group)
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

router.get('/api/groups/:groupId', async (req: Request, res: Response) => {
    const groupId = req.params!.groupId
    const group = await Group.findByPk(groupId)
    if (!group) {
        throw new GroupNotFoundError()
    }
    //@ts-ignore
    const users = group.getUsers()
    res.status(200).json(users)
})

router.delete('/api/groups/:groupId/users/:userId', async (req: Request, res: Response) => {
    const groupId = req.params!.groupId
    const userId = req.params!.userId
    const group = await Group.findByPk(groupId)
    if (!group) {
        throw new GroupNotFoundError()
    }
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    await group.removeUser(user)
    res.status(200).json({message: 'User removed from group'})
})

router.get('/api/users/:userId/groups', async (req: Request, res: Response) => {
    const userId = req.params!.userId
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const groups = await user.getGroups({include: [User]})
    res.status(200).json(groups)
})

router.get('/api/users/:userId/groups/:groupId', async (req: Request, res: Response) => {
    const {userId, groupId} = req.params
    const user = await User.findByPk(userId)
    if (!user) {
        throw new UserNotFoundError()
    }
    //@ts-ignore
    const group = (await user.getGroups({where: {id: groupId}, include: [User]})).find(g => g)
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


