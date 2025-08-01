import React from 'react';
import { Text, View, StyleSheet, ScrollView, Animated } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Hook kustom untuk animasi fade-in (dapat diekstrak ke file terpisah)
const useFadeIn = (duration = 500) => {
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
    transform: [{ translateY: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }],
  };
};

export default function AboutScreen() {
  const animationStyle = useFadeIn();

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.content, animationStyle]}>
        <View style={styles.card}>
          <Text style={styles.title}>Tentang Aplikasi Ini</Text>
          <Text style={styles.bodyText}>
            Aplikasi ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah Pemrograman Mobile. Tujuannya adalah untuk mendemonstrasikan kemampuan dalam membangun aplikasi mobile multi-halaman menggunakan teknologi React Native dan Expo Router.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Fungsi Halaman</Text>
          
          <View style={styles.featureItem}>
            <Ionicons name="home" size={24} color="#0D47A1" style={styles.icon} />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Home</Text>
              <Text style={styles.featureDescription}>Menampilkan informasi umum mengenai Universitas Muhammadiyah Makassar.</Text>
            </View>
          </View>
          
          <View style={styles.featureItem}>
            <Ionicons name="information-circle" size={24} color="#0D47A1" style={styles.icon} />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>About</Text>
              <Text style={styles.featureDescription}>Memberikan penjelasan mengenai tujuan dan fungsi dari aplikasi ini.</Text>
            </View>
          </View>
          
          <View style={styles.featureItem}>
            <Ionicons name="person" size={24} color="#0D47A1" style={styles.icon} />
            <View style={styles.featureTextContainer}>
              <Text style={styles.featureTitle}>Profil</Text>
              <Text style={styles.featureDescription}>Menampilkan data diri dan foto profil pengembang aplikasi.</Text>
            </View>
          </View>
        </View>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 15,
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  icon: {
    marginRight: 15,
  },
  featureTextContainer: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  featureDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
