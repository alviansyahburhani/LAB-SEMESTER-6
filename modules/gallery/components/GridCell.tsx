// modules/gallery/components/GridCell.tsx
import React from 'react';
import { TouchableOpacity, StyleSheet, Animated } from 'react-native';

// Kita tidak menggunakan Reanimated untuk menghindari kesamaan dependensi.
// Animated dari React Native sudah cukup dan membuat kode kita beda.

interface GridCellProps {
  item: {
    id: string;
    isFlipped: boolean;
    primaryUri: string;
    alternativeUri: string;
    scale: number;
  };
  onPress: (id: string) => void;
}

const GridCell = ({ item, onPress }: GridCellProps) => {
  const animatedScale = new Animated.Value(item.scale);

  // Animasikan perubahan skala
  Animated.spring(animatedScale, {
    toValue: item.scale,
    useNativeDriver: true, // Performa lebih baik
  }).start();

  const animatedStyle = {
    transform: [{ scale: animatedScale }],
  };

  const imageUri = item.isFlipped ? item.alternativeUri : item.primaryUri;

  return (
    <TouchableOpacity onPress={() => onPress(item.id)} style={styles.container}>
      <Animated.Image source={{ uri: imageUri }} style={[styles.image, animatedStyle]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 110,
    height: 110,
    margin: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
});

export default React.memo(GridCell); // Memoization tetap penting!