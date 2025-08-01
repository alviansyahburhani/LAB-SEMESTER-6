import React, { useRef } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { useFocusEffect } from 'expo-router';

// Komponen kartu kustom untuk tampilan yang lebih baik
const InfoCard = ({ children }: { children: React.ReactNode }) => (
  <View style={styles.card}>{children}</View>
);

// Hook kustom untuk animasi fade-in
const useFadeIn = (duration = 500) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useFocusEffect(
    React.useCallback(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }).start();
      return () => fadeAnim.setValue(0); // Reset saat meninggalkan layar
    }, [])
  );

  return {
    opacity: fadeAnim,
    transform: [
      {
        translateY: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };
};

export default function HomeScreen() {
  const animationStyle = useFadeIn();

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.content, animationStyle]}>
        <InfoCard>
          <Image
            source={require('../../assets/images/logoUnismuh.png')}
            style={styles.campusImage}
          />
          <Text style={styles.title}>Universitas Muhammadiyah Makassar</Text>
          <Text style={styles.subtitle}>Kampus Biru, Pusat Pencerahan</Text>
        </InfoCard>

        <InfoCard>
          <Text style={styles.sectionTitle}>Deskripsi Singkat</Text>
          <Text style={styles.bodyText}>
            Universitas Muhammadiyah (Unismuh) Makassar adalah salah satu perguruan tinggi swasta terkemuka di Indonesia Timur. Berkomitmen pada nilai-nilai Islam dan keunggulan akademik, Unismuh menjadi pusat pendidikan, penelitian, dan pengabdian kepada masyarakat yang mencerahkan.
          </Text>
        </InfoCard>

        <InfoCard>
          <Text style={styles.sectionTitle}>Lokasi</Text>
          <Text style={styles.bodyText}>
            Jl. Sultan Alauddin No. 259, Makassar, Sulawesi Selatan, Indonesia.
          </Text>
        </InfoCard>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  campusImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 10,
    borderLeftColor: '#FFC107',
    borderLeftWidth: 4,
    paddingLeft: 10,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
});
