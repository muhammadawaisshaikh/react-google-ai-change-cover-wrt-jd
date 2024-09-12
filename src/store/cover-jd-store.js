import { create } from 'zustand';

const useStore = create((set) => ({
  coverLetter: '',
  setCoverLetter: (newCoverLetter) => set({ coverLetter: newCoverLetter }),

  jobDescription: '',
  setJobDescription: (newJobDescription) => set({ jobDescription: newJobDescription }),

  transformedCoverLetter: 'No transformed cover letter available. Please input the cover letter and job description, then click "Transform Cover Letter."',
  setTransformedCoverLetter: (newText) => set({ transformedCoverLetter: newText }),
}));

export default useStore;