import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Komponen kustom yang sama dari Tugas 5
const QuestionCard = ({ text }: { text: string }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Ionicons name="help-circle-outline" size={24} color="#0D47A1" />
      <Text style={styles.cardHeaderText}>Pertanyaan</Text>
    </View>
    <Text style={styles.questionText}>{text}</Text>
  </View>
);

const AnswerCard = ({ children }: { children: React.ReactNode }) => (
  <View style={[styles.card, { backgroundColor: '#EBF4FF' }]}>
    <View style={styles.cardHeader}>
      <Ionicons name="bulb-outline" size={24} color="#1976D2" />
      <Text style={styles.cardHeaderText}>Jawaban</Text>
    </View>
    <Text style={styles.answerText}>{children}</Text>
  </View>
);

export default function Tugas7Screen() {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Tugas 7: Kustomisasi Font' }} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.pageTitle}>Tugas 7: Kustomisasi Font</Text>
        
        <QuestionCard text="Jelaskan Tentang Font. apa itu font family dan cara menggunakan font di expo" />

        <AnswerCard>
          Anggap kita itu seorang sutradara film. Aplikasi yang kita buat itu adalah filmnya. Setiap tulisan di dalam aplikasi itu kan punya peran, punya karakter. Ada yang perannya sebagai judul yang harus teriak dan menarik perhatian, ada juga yang perannya sebagai narator yang ceritanya harus enak dibaca. Di sini font masuk. Kita anggap setiap file font (mis Poppins-Bold.ttf) itu adalah seorang aktor spesialis. Aktor yang ini jago sekali kalau disuruh akting dengan suara berat, tegas, berwibawa. Beda juga dengan Poppins-Regular.ttf, dia aktor yang jago dialog panjang dengan suara tenang dan jelas.
          {'\n\n'}
          Untuk fontFamily? Ini itu ibarat nama agensi artis yang menaungi para aktor tadi. Jadi, 'Poppins' itu nama agensinya. Kalau kita butuh aktor, kita tinggal hubungi agensinya, terus bilang mau aktor yang karakternya gimana. "Saya mau aktor dari agensi 'Poppins' yang suaranya tegas (fontWeight: 'bold')". Nanti si manajer (sistem) akan otomatis mengirim aktor yang paling jago untuk peran itu.
          {'\n\n'}
          Untuk prosesnya di Expo, langkahnya sangat logis. Pertama, kita siapkan 'alatnya' dengan meng-install expo-font. Kedua, kita 'daftarkan' semua gaya tulisan yang ingin kita pakai di awal aplikasi menggunakan hook useFonts agar siap sedia. Ketiga, kita tinggal 'panggil' nama keluarga font tersebut di komponen mana pun yang kita inginkan melalui properti fontFamily dalam style.
        </AnswerCard>
      </View>
    </ScrollView>
  );
}

// Menggunakan style yang sama dengan Tugas 5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  content: {
    padding: 20,
  },
  pageTitle: {
    fontFamily: 'Playfair-Bold',
    fontSize: 28,
    color: '#1E3A8A',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#ADB5BD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F5',
    paddingBottom: 10,
  },
  cardHeaderText: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    color: '#0D47A1',
    marginLeft: 10,
  },
  questionText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#495057',
    lineHeight: 24,
  },
  answerText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#343A40',
    lineHeight: 26,
  },
});
