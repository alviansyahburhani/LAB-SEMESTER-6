import React from 'react';
import { Text, View, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Komponen kustom untuk menampilkan pertanyaan
const QuestionCard = ({ number, text }: { number: number, text: string }) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Ionicons name="help-circle-outline" size={24} color="#0D47A1" />
      <Text style={styles.cardHeaderText}>Pertanyaan {number}</Text>
    </View>
    <Text style={styles.questionText}>{text}</Text>
  </View>
);

// Komponen kustom untuk menampilkan jawaban
const AnswerCard = ({ children }: { children: React.ReactNode }) => (
  <View style={[styles.card, { backgroundColor: '#EBF4FF' }]}>
    <View style={styles.cardHeader}>
      <Ionicons name="bulb-outline" size={24} color="#1976D2" />
      <Text style={styles.cardHeaderText}>Jawaban</Text>
    </View>
    <Text style={styles.answerText}>{children}</Text>
  </View>
);

export default function Tugas5Screen() {
  return (
    <ScrollView style={styles.container}>
      <Stack.Screen options={{ title: 'Tugas 5: Komponen Dasar' }} />
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.pageTitle}>Tugas 5: Komponen Dasar</Text>
        
        <QuestionCard number={1} text="Apakah sebuah kata bisa dimasukkan ke dalam komponen selain <Text /> di React Native? Jika iya, jelaskan alasannya." />
        <QuestionCard number={2} text="Apa saja batasan dari komponen Image di React Native?" />

        <AnswerCard>
          Pertama, soal teks. Anggap saja di React Native itu ada aturan nggak tertulis: semua tulisan, entah itu cuma satu kata atau satu paragraf, wajib 'dibungkus' pakai komponen &lt;Text&gt;. Kalau ditaruh di tempat lain kayak di dalam &lt;View&gt;, aplikasinya pasti error. Soalnya, cuma &lt;Text&gt; yang memang dirancang untuk nampilin tulisan.
          {'\n\n'}
          Kedua, soal gambar. Komponen &lt;Image&gt; itu andalan banget, tapi ada beberapa hal yang perlu diingat. Kalau ambil gambar dari internet, ukuran panjang dan lebarnya harus kita tentukan sendiri biar gambarnya muncul. Terus, dia juga nggak bisa langsung nampilin gambar format SVG, jadi perlu 'bantuan' dari library lain. Satu lagi, untuk animasi GIF di Android, kadang butuh sedikit trik tambahan biar bisa gerak.
        </AnswerCard>
      </View>
    </ScrollView>
  );
}

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
