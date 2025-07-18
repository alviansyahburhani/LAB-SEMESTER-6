import React, { useState, useMemo, memo, FC } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// --- BAGIAN 1: DATA & LOGIKA ---

interface Student {
  id: number;
  fullName: string;
  stambuk: string;
}

const realStudentData = [
    { fullName: 'Majeri', stambuk: '105841103622' },
    { fullName: 'Hamdani', stambuk: '105841103722' },
    { fullName: 'ALI SULTON S PALILATI', stambuk: '105841102222' },
    { fullName: 'ABSARMARSAL RIZAL MAHUA', stambuk: '105841101522' },
    { fullName: 'Syawaluddin', stambuk: '105841101622' },
    { fullName: 'NUR MILAIN HIDAYAH', stambuk: '105841100822' },
    { fullName: 'Siti Marwa', stambuk: '105841100122' },
    { fullName: 'Muliana', stambuk: '105841103822' },
    { fullName: 'NABILA ISMAIL MATTA', stambuk: '105841100722' },
    { fullName: 'Andi Citra Ayu Lestari', stambuk: '105841101722' },
];

const studentList: Student[] = Array.from({ length: 130 }, (_, i) => {
  const id = i + 1;
  if (i < realStudentData.length) {
    return { id, ...realStudentData[i] };
  }
  return {
    id,
    fullName: `Mahasiswa Angkatan '22 No. ${id}`,
    stambuk: `10584110${String(id).padStart(3, '0')}22`,
  };
});

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

// Hanya butuh daftar nama font-nya saja.
// Pastikan urutan dan nama di sini sama persis dengan yang ada di _layout.tsx
const allFontFamilies = [
  // Statis
  'Roboto-Regular', 'Lato-Bold', 'Oswald-Regular', 'Raleway-Bold', 'Montserrat-Regular',
  // Variabel
  'Inter-Variable', 'WorkSans-Variable', 'Manrope-Variable', 'SourceSans3-Variable', 'Outfit-Variable',
];


// --- BAGIAN 3: KOMPONEN KARTU NAMA ---

interface NameCardProps {
  name: string;
  stambuk: string;
  index: number;
}

const NameCard: FC<NameCardProps> = memo(({ name, stambuk, index }) => {
  const fontFamily = allFontFamilies[index];
  const isVariable = fontFamily.includes('Variable');
  const dynamicWeight = isVariable ? `${(index - 4) * 100 + 500}` as any : 'normal';

  return (
    <View style={styles.card}>
      <Text style={[styles.cardText, { fontFamily, fontWeight: dynamicWeight }]}>
        {name}
      </Text>
      <Text style={styles.stambukText}>{stambuk}</Text>
      <Text style={styles.fontInfo}>{fontFamily} {isVariable && `(weight: ${dynamicWeight})`}</Text>
    </View>
  );
});


// --- BAGIAN 4: LAYAR UTAMA APLIKASI ---

export default function FontAssignmentScreen() {
  const [stambuk, setStambuk] = useState(10);
  const displayedNames = useMemo(() => getNeighboringNames(stambuk), [stambuk]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, width: '100%' }}>
        <Text style={styles.header}>Daftar Nama (Stambuk: {stambuk})</Text>
        <FlatList
          data={displayedNames}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <NameCard
              name={item.fullName}
              stambuk={item.stambuk}
              index={index}
            />
          )}
        />
      </View>

      <View style={styles.controlContainer}>
        <Text style={styles.controlLabel}>Ubah Urutan Stambuk</Text>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStambuk(s => (s > 1 ? s - 1 : 130))}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.stambukDisplay}>{stambuk}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setStambuk(s => (s < 130 ? s + 1 : 1))}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
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
    paddingTop: 50,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  controlContainer: {
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderTopWidth: 1,
    borderTopColor: '#3A3A3C',
  },
  controlLabel: {
    color: 'white',
    marginBottom: 15,
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#0A84FF',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  stambukDisplay: {
    color: 'white',
    fontSize: 22,
    fontWeight: '600',
    width: 60,
    textAlign: 'center',
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
  stambukText: {
    color: '#b0b0b0',
    fontSize: 14,
    marginTop: 4,
  },
  fontInfo: {
    color: '#8e8e93',
    fontSize: 10,
    marginTop: 8,
  },
});