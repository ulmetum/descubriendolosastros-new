import { create } from 'zustand'

interface PropsState {
  isActiveButton: boolean
  setIsActiveButton: (value: boolean) => void
}

export const useActiveButtonStore = create<PropsState>((set) => ({
  isActiveButton: true,
  setIsActiveButton: (value: boolean) => set({ isActiveButton: value }),
}))
