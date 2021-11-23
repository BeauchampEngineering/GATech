import { entity } from 'simpler-state'

export const groups = entity([])

export const setAllGroups = (allGroups) => {
  console.log('Set all gorups is running')
  //   groups.push(...allGroups)
  groups.set(allGroups)
}

export const addGroup = (newGroup) => {
  console.log('add Group Starts')
  groups.set((value) => [...value, newGroup])
}
