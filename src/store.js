import { create } from 'zustand';

const useModalStore = create((set) => ({
  modal: false,
  openModal: () => set({ modal: true }),
  closeModal: () => set({ modal: false }),
}));

export default useModalStore;
