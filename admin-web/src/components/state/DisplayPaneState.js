import { entity } from 'simpler-state'

export const isGroup = entity(false)
export const title = entity('')
export const groupId = entity(-1)
export const userId = entity(-1)

export const setDisplayGroup = (g) => {
  isGroup.set(true)
  title.set(g.name)
  groupId.set(g.id)
  userId.set(-1)
}

export const setDisplayUser = (u) => {
  isGroup.set(false)
  title.set(u.email)
  groupId.set(-1)
  userId.set(u.userId)
}
