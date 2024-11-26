import { create } from "zustand"

interface PropsState {
  search: string
  setSearch: (value: string) => void
}

export const useSearchStore = create<PropsState>((set) => ({
  search: "",
  setSearch: (value: string) => set({ search: value }),
}))
