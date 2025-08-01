import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const InfoCard = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    {children}
  </View>
);

const FeatureItem = ({ icon, title, description }: { icon: keyof typeof Ionicons.glyphMap, title: string, description: string }) => (
  <View style={styles.featureItem}>
    <Ionicons name={icon} size={28} color="#1976D2" style={styles.icon} />
    <View style={styles.featureTextContainer}>
      <Text style={styles.featureTitle}>{title}</Text>
      <Text style={styles.featureDescription}>{description}</Text>
    </View>
  </View>
);

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <InfoCard title="Tentang Aplikasi Ini">
          <Text style={styles.bodyText}>
            Aplikasi ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah Pemrograman Mobile. Tujuannya adalah untuk mendemonstrasikan kemampuan dalam membangun aplikasi mobile multi-halaman menggunakan teknologi React Native dan Expo Router.
          </Text>
        </InfoCard>

        <InfoCard title="Fungsi Halaman">
          <FeatureItem icon="home-outline" title="Home" description="Menampilkan informasi umum mengenai Universitas Muhammadiyah Makassar." />
          <FeatureItem icon="information-circle-outline" title="About" description="Memberikan penjelasan mengenai tujuan dan fungsi dari aplikasi ini." />
          <FeatureItem icon="archive-outline" title="Arsip Tugas" description="Menampilkan daftar tugas-tugas yang pernah dikerjakan." />
          <FeatureItem icon="person-outline" title="Profil" description="Menampilkan data diri dan foto profil pengembang aplikasi." />
        </InfoCard>
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
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 25,
    marginBottom: 20,
    shadowColor: '#1E3A8A',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 8,
  },
  cardTitle: {
    fontFamily: 'Playfair-Bold',
    fontSize: 22,
    color: '#1E3A8A',
    marginBottom: 15,
  },
  bodyText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#495057',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#F1F3F5',
  },
  icon: {
    marginRight: 20,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    color: '#212529',
  },
  featureDescription: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#6C757D',
    marginTop: 4,
    lineHeight: 20,
  },
});
