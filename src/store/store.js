import create from 'zustand';

export const useStore = create((set) => ({
  isPhotoSelected: true,
  isStickerSelected: false,
  selectPhoto: () => set({ isPhotoSelected: true, isStickerSelected: false }),
  selectSticker: () => set({ isPhotoSelected: false, isStickerSelected: true }),
  resetSelection: () => set({ isPhotoSelected: false, isStickerSelected: false }),
}));
