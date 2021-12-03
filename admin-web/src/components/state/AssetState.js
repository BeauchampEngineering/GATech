import { entity } from 'simpler-state'

export const assets = entity([])

export const setAllAssets = (allAssets) => {
  assets.set(allAssets)
}

export const addAsset = (newAsset) => {
  assets.set((value) => [...value, newAsset])
}

export const removeAsset = (deleteAsset) => {
  assets.set(assets.get().filter((a) => a !== deleteAsset))
}
