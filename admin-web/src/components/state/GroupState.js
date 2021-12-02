import { entity } from 'simpler-state'

export const groups = entity([])

export const setAllGroups = (allGroups) => {
  groups.set(allGroups)
}

export const addGroup = (newGroup) => {
  groups.set((value) => [...value, newGroup])
}

export const removeGroup = (deleteGroup) => {
  groups.set(groups.get().filter((g) => g !== deleteGroup))
}
