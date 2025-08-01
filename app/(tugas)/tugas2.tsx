// app/tugas2.tsx
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GridContextProvider } from '../../modules/gallery/context/GridContext'; // Sesuaikan path jika berbeda
import GalleryComponent from '../../modules/gallery/GalleryScreen'; // Sesuaikan path jika berbeda

export default function Tugas2Page() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <GridContextProvider>
        <GalleryComponent />
      </GridContextProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1c1c1e',
  },
});