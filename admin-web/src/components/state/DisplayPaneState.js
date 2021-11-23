import { entity } from 'simpler-state'

export const isGroupState = entity(false)
export const title = entity('')
export const groupIdState = entity(-1)
export const userIdState = entity(-1)

export const setDisplayGroup = (g) => {
  isGroupState.set(true)
  title.set(g.name)
  groupIdState.set(g.id)
  userIdState.set(-1)
}

export const setDisplayUser = (u) => {
  isGroupState.set(false)
  title.set(u.email)
  groupIdState.set(-1)
  userIdState.set(u.id)
}
