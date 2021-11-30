import { entity } from 'simpler-state'

export const userList = entity([])

export const setAllUsers = (allUsers) => {
  userList.set(allUsers)
}

export const newUser = (newUser) => {
  userList.set((value) => [...value, newUser])
}

export const removeUser = (deleteUser) => {
  userList.set(userList.get().filter((u) => u !== deleteUser))
}
