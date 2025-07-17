// core/ui/IndexScreen.tsx
import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useFonts } from 'expo-font';
import { staticFontsToLoad, variableFontsToLoad } from '../assets/fontManager';
import { getNeighboringNames } from '../logic/nameSelector';
import NameCard from './NameCard';
import Slider from '@react-native-community/slider';

export default function FontDisplayScreen() {
  const [fontsLoaded, fontError] = useFonts({
    ...staticFontsToLoad,
    ...variableFontsToLoad,
  });

  const [stambuk, setStambuk] = useState(10); // Nilai stambuk awal

  // Gunakan useMemo untuk efisiensi, hanya hitung ulang jika stambuk berubah
  const displayedNames = useMemo(() => getNeighboringNames(stambuk), [stambuk]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }
  if (fontError) {
    return <Text>Error memuat font: {fontError.message}</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Nama (Stambuk: {stambuk})</Text>
      <FlatList
        data={displayedNames}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => <NameCard name={item.fullName} index={index} />}
        style={styles.list}
      />
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Ubah Urutan Stambuk</Text>
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={1}
          maximumValue={130}
          step={1}
          value={stambuk}
          onValueChange={setStambuk}
          minimumTrackTintColor="#0A84FF"
          maximumTrackTintColor="#5e5e5e"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1c1c1e', paddingTop: 60, paddingHorizontal: 15 },
  header: { fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 20, textAlign: 'center' },
  list: { flex: 1 },
  sliderContainer: { padding: 20, borderTopWidth: 1, borderTopColor: '#3A3A3C' },
  sliderLabel: { color: 'white', textAlign: 'center', marginBottom: 10 },
});