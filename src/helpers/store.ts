import * as THREE from 'three'
import create from 'zustand'

type Store = {
  router: any
  dom: any
  locked: boolean
  objects: THREE.Mesh[]
  setLocked: (value: boolean) => void
}

const useStore = create<Store>((set) => {
  return {
    router: null,
    dom: null,
    locked: false,
    objects: [],
    setLocked: (value) => set(() => ({ locked: value })),
  }
})

export default useStore
