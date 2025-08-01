import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Animated, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Hook animasi fade-in yang bisa digunakan kembali
const useFadeIn = (duration = 600) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }).start();
      return () => fadeAnim.setValue(0);
    }, [])
  );
  return {
    opacity: fadeAnim,
    transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [30, 0] }) }],
  };
};

const InfoItem = ({ icon, text }: { icon: keyof typeof Ionicons.glyphMap, text: string }) => (
  <View style={styles.infoItem}>
    <Ionicons name={icon} size={20} color="#1976D2" />
    <Text style={styles.infoText}>{text}</Text>
  </View>
);

export default function HomeScreen() {
  const animationStyle = useFadeIn();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Hero Section dengan Gradient dan gambar logo */}
      <LinearGradient
        colors={['#0D47A1', '#1976D2', '#42A5F5']}
        style={styles.heroContainer}>
        <Image
          source={require('../../assets/images/unismuh.png')}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>Universitas Muhammadiyah Makassar</Text>
        <Text style={styles.heroSubtitle}>Kampus Biru, Pusat Pencerahan Bangsa</Text>
      </LinearGradient>

      {/* Konten Informasi dengan animasi */}
      <Animated.View style={[styles.contentContainer, animationStyle]}>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Deskripsi Singkat</Text>
          <Text style={styles.bodyText}>
            Universitas Muhammadiyah (Unismuh) Makassar adalah salah satu perguruan tinggi swasta terkemuka di Indonesia Timur. Berkomitmen pada nilai-nilai Islam dan keunggulan akademik, Unismuh menjadi pusat pendidikan, penelitian, dan pengabdian kepada masyarakat yang mencerahkan.
          </Text>
        </View>

        {/* Bagian Visi & Misi BARU */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Visi & Misi</Text>
          <Text style={styles.subSectionTitle}>Visi</Text>
          <Text style={styles.bodyText}>
            Menjadi perguruan tinggi Islam terkemuka, unggul dalam pengembangan ilmu pengetahuan, teknologi, dan seni yang mencerahkan, berbasis riset pada tahun 2034.
          </Text>
          <Text style={styles.subSectionTitle}>Misi</Text>
          <InfoItem icon="checkmark-circle-outline" text="Menyelenggarakan pendidikan yang bermutu." />
          <InfoItem icon="checkmark-circle-outline" text="Mengembangkan penelitian yang inovatif." />
          <InfoItem icon="checkmark-circle-outline" text="Melaksanakan pengabdian kepada masyarakat." />
          <InfoItem icon="checkmark-circle-outline" text="Membina kehidupan Islami di lingkungan kampus." />
        </View>

        {/* Bagian Fakultas Unggulan BARU */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Fakultas Unggulan</Text>
          <InfoItem icon="build-outline" text="Fakultas Teknik" />
          <InfoItem icon="cash-outline" text="Fakultas Ekonomi dan Bisnis" />
          <InfoItem icon="heart-outline" text="Fakultas Kedokteran dan Ilmu Kesehatan" />
          <InfoItem icon="school-outline" text="Fakultas Keguruan dan Ilmu Pendidikan" />
          <InfoItem icon="leaf-outline" text="Fakultas Pertanian" />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Lokasi</Text>
          <Text style={styles.bodyText}>
            Jl. Sultan Alauddin No. 259, Makassar, Sulawesi Selatan, Indonesia.
          </Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Latar belakang netral
  },
  heroContainer: {
    paddingTop: 70, // Lebih banyak ruang di atas
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heroImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    marginBottom: 20,
  },
  heroTitle: {
    fontFamily: 'Playfair-Bold',
    fontSize: 28,
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  heroSubtitle: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 8,
    textAlign: 'center',
  },
  contentContainer: {
    padding: 20,
    marginTop: -20, // Konten sedikit menjorok ke atas hero section
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
  sectionTitle: {
    fontFamily: 'Playfair-Bold',
    fontSize: 22,
    color: '#1E3A8A',
    marginBottom: 15,
  },
  subSectionTitle: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    color: '#343A40',
    marginTop: 10,
    marginBottom: 8,
  },
  bodyText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    lineHeight: 26,
    color: '#495057',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#495057',
    marginLeft: 10,
    flex: 1,
  },
});
