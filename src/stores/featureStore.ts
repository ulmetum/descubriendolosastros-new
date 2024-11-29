import { create } from "zustand"

interface PropsState {
  inViewFeature: number | null
  setInViewFeature: (inViewFeature: number | null) => void
}

export const useFeatureStore = create<PropsState>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature) => set({ inViewFeature: feature }),
}))
