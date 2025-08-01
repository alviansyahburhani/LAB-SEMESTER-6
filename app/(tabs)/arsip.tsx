import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, StatusBar } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Menambahkan tugas 5 dan 7 ke dalam daftar
const daftarTugas = [
  { href: '/(tugas)/tugas1', nama: 'Tugas 1', deskripsi: 'Mempelajari Komponen Dasar', kategori: 'React Native' },
  { href: '/(tugas)/tugas2', nama: 'Tugas 2', deskripsi: 'Manajemen State & Props', kategori: 'React Native' },
  { href: '/(tugas)/tugas4', nama: 'Tugas 4', deskripsi: 'Navigasi & Routing', kategori: 'Expo Router' },
  { href: '/(tugas)/tugas5', nama: 'Tugas 5', deskripsi: 'Esai: Komponen Teks & Gambar', kategori: 'Teori' },
  { href: '/(tugas)/tugas6', nama: 'Tugas 6', deskripsi: 'Integrasi dengan API', kategori: 'Networking' },
  { href: '/(tugas)/tugas7', nama: 'Tugas 7', deskripsi: 'Esai: Kustomisasi Font', kategori: 'Teori' },
];

// Komponen Kartu Tugas yang didesain ulang
const TugasCard = ({ item }: { item: typeof daftarTugas[0] }) => (
  <Link href={item.href} asChild>
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.iconContainer}>
          <Ionicons name="document-text-outline" size={24} color="#0D47A1" />
        </View>
        <Text style={styles.cardCategory}>{item.kategori}</Text>
      </View>
      <Text style={styles.cardTitle}>{item.nama}</Text>
      <Text style={styles.cardDescription}>{item.deskripsi}</Text>
      <View style={styles.cardFooter}>
        <Text style={styles.footerText}>Lihat Detail</Text>
        <Ionicons name="arrow-forward-circle" size={22} color="#1976D2" />
      </View>
    </TouchableOpacity>
  </Link>
);


export default function ArsipScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header yang terinspirasi dari situs web Unismuh */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Arsip Perkuliahan</Text>
        <Text style={styles.headerSubtitle}>Dokumentasi Tugas & Proyek</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {daftarTugas.map((tugas) => (
          <TugasCard key={tugas.href} item={tugas} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF4FF', // Warna latar belakang yang lebih cerah
  },
  header: {
    backgroundColor: '#0D47A1', // Warna biru tua khas Unismuh
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    fontFamily: 'Playfair-Bold',
    fontSize: 32,
    color: '#FFFFFF',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  scrollContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#0D47A1',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 45,
    height: 45,
    borderRadius: 15,
    backgroundColor: '#EBF4FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  cardCategory: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 14,
    color: '#0D47A1',
    backgroundColor: '#EBF4FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    overflow: 'hidden', // Untuk iOS agar background color sesuai radius
  },
  cardTitle: {
    fontFamily: 'Playfair-Bold',
    fontSize: 22,
    color: '#212529',
    marginBottom: 5,
  },
  cardDescription: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 15,
    color: '#6C757D',
    marginBottom: 20,
    lineHeight: 22,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#F1F3F5',
    paddingTop: 15,
  },
  footerText: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 14,
    color: '#1976D2',
  },
});
