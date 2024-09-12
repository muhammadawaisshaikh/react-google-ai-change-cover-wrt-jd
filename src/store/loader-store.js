import { create } from 'zustand'

const useLoaderStore = create((set) => ({
  isLoading: false,
  setLoading: (loadingState) => set({ isLoading: loadingState })
}))

export default useLoaderStore;