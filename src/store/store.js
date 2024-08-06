import create from 'zustand';

export const useStore = create((set) => ({
  isPhotoSelected: true,
  isStickerSelected: false,
  isMineSelected: true,
  isMarketSelected: false,
  selectPhoto: () => set({ isPhotoSelected: true, isStickerSelected: false }),
  selectSticker: () => set({ isPhotoSelected: false, isStickerSelected: true }),
  selectMine: () => set({ isMineSelected: true, isMarketSelected: false }),
  selectMarket: () => set({ isMineSelected: false, isMarketSelected: true }),
  resetSelection: () => set({ isPhotoSelected: false, isStickerSelected: false }),
}));
