// modules/gallery/GalleryScreen.tsx
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useGrid } from './context/GridContext';
import GridCell from './components/GridCell';

const GalleryComponent = () => {
  const { gridItems, handleImageInteraction } = useGrid();

  return (
    <FlatList
      data={gridItems}
      keyExtractor={item => item.id}
      numColumns={3}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <GridCell item={item} onPress={handleImageInteraction} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default GalleryComponent;