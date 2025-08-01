import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { useFocusEffect } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Data item untuk profil
const ProfileDataItem = ({ icon, label, value }: { icon: keyof typeof Ionicons.glyphMap, label: string, value: string }) => (
  <View style={styles.dataItem}>
    <Ionicons name={icon} size={20} color="#0D47A1" style={styles.icon} />
    <View>
      <Text style={styles.dataLabel}>{label}</Text>
      <Text style={styles.dataValue}>{value}</Text>
    </View>
  </View>
);

// Hook kustom untuk animasi fade-in
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


export default function ProfileScreen() {
  const animationStyle = useFadeIn();

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={[styles.content, animationStyle]}>
        <View style={styles.profileCard}>
          <Image
            source={require('../../assets/images/profil.png')}
            style={styles.profileImage}
          />
          {/* GANTI DENGAN NAMA ANDA */}
          <Text style={styles.name}>alvian syah burhani</Text>
          {/* GANTI DENGAN NIM ANDA */}
          <Text style={styles.nim}>NIM: 105841103522</Text>
        </View>

        <View style={styles.detailsCard}>
          {/* GANTI DENGAN DATA DIRI ANDA */}
          <ProfileDataItem icon="school" label="Fakultas" value="Fakultas Teknik" />
          <ProfileDataItem icon="code-slash" label="Jurusan" value="Teknik Informatika" />
          <ProfileDataItem icon="people" label="Kelas" value="IF 22" />
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
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    alignItems: 'center',
    padding: 30,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#0D47A1',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  nim: {
    fontSize: 16,
    color: '#777',
    marginTop: 5,
  },
  detailsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  dataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  icon: {
    marginRight: 20,
  },
  dataLabel: {
    fontSize: 14,
    color: '#888',
  },
  dataValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
});
