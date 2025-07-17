// app/tugas3.tsx (atau app/tugas4.tsx)

import React, { useState, useMemo, memo, FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { useFonts } from 'expo-font';
import Slider from '@react-native-community/slider';

// --- BAGIAN 1: DATA & LOGIKA ---

interface Student {
  id: number;
  fullName: string;
}

// Data Mahasiswa
const studentList: Student[] = Array.from({ length: 130 }, (_, i) => ({
  id: i + 1,
  fullName: `Mahasiswa Angkatan '22 No. ${i + 1}`,
}));

// Logika untuk memilih nama (dengan modulo)
const getNeighboringNames = (targetStambuk: number): Student[] => {
  const result: Student[] = [];
  const totalStudents = studentList.length;
  const targetIndex = targetStambuk - 1;

  for (let i = 5; i > 0; i--) {
    const prevIndex = (targetIndex - i + totalStudents) % totalStudents;
    result.push(studentList[prevIndex]);
  }
  for (let i = 1; i <= 5; i++) {
    const nextIndex = (targetIndex + i) % totalStudents;
    result.push(studentList[nextIndex]);
  }
  return result;
};


// --- BAGIAN 2: PETA FONT ---
// ⚠️ PENTING: Pastikan nama file di sini sama persis dengan nama file di folder assets Anda!
const fontsToLoad = {
  // Font Statis
  'Roboto': require('./roboto.ttf'),
  'Lato-Bold': require('../assets/fonts/static/Lato-Bold.ttf'),
  'Oswald-Regular': require('../assets/fonts/static/Oswald-Regular.ttf'),
  'Raleway-Bold': require('../assets/fonts/static/Raleway-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/static/Montserrat-Regular.ttf'),
  // Font Variabel
  'Inter-Variable': require('../assets/fonts/variable/Inter-VariableFont_slnt,wght.ttf'),
  'WorkSans-Variable': require('../assets/fonts/variable/WorkSans-VariableFont_wght.ttf'),
  'Manrope-Variable': require('../assets/fonts/variable/Manrope-VariableFont_wght.ttf'),
  'SourceSans3-Variable': require('../assets/fonts/variable/SourceSans3-VariableFont_wght.ttf'),
  'Outfit-Variable': require('../assets/fonts/variable/Outfit-VariableFont_wght.ttf'),
};
const allFontFamilies = Object.keys(fontsToLoad);


// --- BAGIAN 3: KOMPONEN KARTU NAMA ---

interface NameCardProps {
  name: string;
  index: number;
}

const NameCard: FC<NameCardProps> = memo(({ name, index }) => {
  const fontFamily = allFontFamilies[index];
  const isVariable = fontFamily.includes('Variable');
  const dynamicWeight = isVariable ? `${(index - 4) * 100 + 500}` as any : 'normal';

  return (
    <View style={styles.card}>
      <Text style={[styles.cardText, { fontFamily, fontWeight: dynamicWeight }]}>
        {name}
      </Text>
      <Text style={styles.fontInfo}>{fontFamily}</Text>
    </View>
  );
});


// --- BAGIAN 4: LAYAR UTAMA APLIKASI ---

export default function FontAssignmentScreen() {
  const [fontsLoaded] = useFonts(fontsToLoad);
  const [stambuk, setStambuk] = useState(10);

  const displayedNames = useMemo(() => getNeighboringNames(stambuk), [stambuk]);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" style={styles.container} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <Text style={styles.header}>Daftar Nama (Stambuk: {stambuk})</Text>
        <FlatList
          data={displayedNames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <NameCard name={item.fullName} index={index} />}
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderLabel}>Ubah Urutan Stambuk</Text>
        <Slider
          style={{ width: '90%', height: 40 }}
          minimumValue={1}
          maximumValue={130}
          step={1}
          value={stambuk}
          onValueChange={setStambuk}
          minimumTrackTintColor="#0A84FF"
        />
      </View>
    </SafeAreaView>
  );
}


// --- BAGIAN 5: SEMUA STYLE ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  sliderContainer: {
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
  },
  sliderLabel: {
    color: 'white',
    marginBottom: 5,
  },
  card: {
    backgroundColor: '#2c2c2e',
    borderRadius: 8,
    padding: 15,
    marginHorizontal: 20,
    marginVertical: 6,
  },
  cardText: {
    color: 'white',
    fontSize: 18,
  },
  fontInfo: {
    color: '#8e8e93',
    fontSize: 10,
    marginTop: 5,
    fontFamily: 'Roboto-Regular', // Font default untuk info
  },
});