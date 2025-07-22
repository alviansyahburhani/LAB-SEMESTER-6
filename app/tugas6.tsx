import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';
import Icon from 'react-native-vector-icons/Ionicons';

// Tipe data untuk setiap item, namanya diubah agar unik
type DataIkon = {
  nama: keyof typeof Icon.glyphMap;
  label: string;
};

// Daftar ikon yang sepenuhnya baru: ikon berbeda, label berbeda, jumlahnya 9
const daftarIkonPribadi: DataIkon[] = [
  { nama: 'airplane-sharp', label: 'Penerbangan' },
  { nama: 'game-controller', label: 'Permainan' },
  { nama: 'headset-sharp', label: 'Musik' },
  { nama: 'pizza-sharp', label: 'Makanan' },
  { nama: 'school-sharp', label: 'Belajar' },
  { nama: 'leaf-sharp', label: 'Alam' },
  { nama: 'code-slash-sharp', label: 'Koding' },
  { nama: 'color-palette-sharp', label: 'Seni' },
  { nama: 'rocket-sharp', label: 'Proyek' },
];

// Nama komponen diubah agar tidak generik
const GaleriIkonUnik: React.FC = () => {
  // Fungsi untuk merender setiap kartu ikon
  const renderItemKartu = ({ item }: { item: DataIkon }) => (
    <View style={styles.wadahKartu}>
      <Icon name={item.nama} size={45} color="#4C51BF" />
      <Text style={styles.labelKartu}>{item.label}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header diatur dengan skema warna baru */}
      <Stack.Screen
        options={{
          title: 'Galeri Pribadi Saya',
          headerStyle: { backgroundColor: '#4C51BF' },
          headerTintColor: '#fff',
        }}
      />
      <FlatList
        data={daftarIkonPribadi}
        renderItem={renderItemKartu}
        keyExtractor={(item) => item.nama}
        // Layout diubah menjadi 3 kolom
        numColumns={3}
        contentContainerStyle={styles.wadahGrid}
      />
    </SafeAreaView>
  );
};

// Stylesheet dengan skema warna dan tata letak yang baru
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FF', // Warna latar belakang halaman diubah
  },
  wadahGrid: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  wadahKartu: {
    flex: 1,
    margin: 6,
    padding: 10,
    height: 120, // Tinggi kartu disesuaikan
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15, // Sudut lebih melengkung
    elevation: 2,
    shadowColor: '#4C51BF',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  labelKartu: {
    marginTop: 12,
    fontSize: 14,
    color: '#2D3748',
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default GaleriIkonUnik;