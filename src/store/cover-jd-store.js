import { create } from 'zustand';

const useStore = create((set) => ({
    coverLetter: '',
    setCoverLetter: (newCoverLetter) => set({ coverLetter: newCoverLetter }),

    jobDescription: '',
    setJobDescription: (newJobDescription) => set({ jobDescription: newJobDescription }),
}));

export default useStore;
