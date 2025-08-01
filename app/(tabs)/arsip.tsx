import React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Daftar tugas yang akan ditampilkan. Sesuaikan dengan file yang Anda miliki.
const daftarTugas = [
  { href: '/tugas1', nama: 'Tugas 1', deskripsi: 'Deskripsi singkat tugas 1' },
  { href: '/tugas2', nama: 'Tugas 2', deskripsi: 'Deskripsi singkat tugas 2' },
  { href: '/tugas4', nama: 'Tugas 4', deskripsi: 'Deskripsi singkat tugas 4' },
  { href: '/tugas6', nama: 'Tugas 6', deskripsi: 'Deskripsi singkat tugas 6' },
  // Tambahkan tugas lainnya di sini
];

export default function ArsipScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Arsip Tugas</Text>
        <Text style={styles.subtitle}>Kumpulan tugas yang telah dikerjakan selama perkuliahan.</Text>
      </View>
      <View style={styles.listContainer}>
        {daftarTugas.map((tugas) => (
          <Link key={tugas.href} href={tugas.href} asChild>
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardContent}>
                <Ionicons name="document-text-outline" size={28} color="#0D47A1" />
                <View style={styles.textContainer}>
                  <Text style={styles.cardTitle}>{tugas.nama}</Text>
                  <Text style={styles.cardDescription}>{tugas.deskripsi}</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  listContainer: {
    padding: 15,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 2,
  },
});
