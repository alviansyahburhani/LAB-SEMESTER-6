// modules/gallery/context/GridContext.tsx
import React, { createContext, useState, useContext, ReactNode, useMemo } from 'react';

// --- Tipe Data ---
interface GridItemState {
  id: string;
  primaryUri: string;
  alternativeUri: string;
  isFlipped: boolean;
  scale: number;
}

interface GridContextType {
  gridItems: GridItemState[];
  handleImageInteraction: (itemId: string) => void;
}

// --- Membuat Context ---
const GridContext = createContext<GridContextType | undefined>(undefined);

// --- Data Awal (dengan seed lebih acak) ---
const generateInitialState = (): GridItemState[] => {
  return Array.from({ length: 9 }, (_, i) => {
    const seed = Math.floor(Math.random() * 500) + i * 10;
    return {
      id: `grid-item-${i}`,
      primaryUri: `https://picsum.photos/id/${seed}/300/300`,
      alternativeUri: `https://picsum.photos/id/${seed + 1}/300/300`,
      isFlipped: false,
      scale: 1.0,
    };
  });
};

// --- Komponen Provider (Pembungkus Logika) ---
export const GridContextProvider = ({ children }: { children: ReactNode }) => {
  const [gridItems, setGridItems] = useState<GridItemState[]>(generateInitialState);

  const handleImageInteraction = (itemId: string) => {
    setGridItems(currentItems =>
      currentItems.map(item => {
        if (item.id === itemId) {
          return {
            ...item,
            isFlipped: !item.isFlipped,
            scale: Math.min(item.scale * 1.2, 2.0),
          };
        }
        return item;
      })
    );
  };

  // Gunakan useMemo untuk mencegah pembuatan ulang objek value yang tidak perlu
  const value = useMemo(() => ({ gridItems, handleImageInteraction }), [gridItems]);

  return <GridContext.Provider value={value}>{children}</GridContext.Provider>;
};

// --- Custom Hook untuk Menggunakan Context ---
export const useGrid = () => {
  const context = useContext(GridContext);
  if (context === undefined) {
    throw new Error('useGrid must be used within a GridContextProvider');
  }
  return context;
};