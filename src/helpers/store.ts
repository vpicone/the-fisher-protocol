import create from 'zustand'

type Store = {
  router: any
  dom: any
  locked: boolean
  setLocked: (value: boolean) => void
}

const useStore = create<Store>((set) => {
  return {
    router: null,
    dom: null,
    locked: false,
    setLocked: (value) => set(() => ({ locked: value })),
  }
})

export default useStore
