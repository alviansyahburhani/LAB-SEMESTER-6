import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from 'expo-router';

// Hook animasi (bisa dipakai ulang)
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
    transform: [{ scale: fadeAnim.interpolate({ inputRange: [0, 1], outputRange: [0.95, 1] }) }],
  };
};

const ProfileDataItem = ({ icon, label, value }: { icon: keyof typeof Ionicons.glyphMap, label: string, value: string }) => (
  <View style={styles.dataItem}>
    <Ionicons name={icon} size={24} color="#1976D2" style={styles.icon} />
    <View>
      <Text style={styles.dataLabel}>{label}</Text>
      <Text style={styles.dataValue}>{value}</Text>
    </View>
  </View>
);

export default function ProfileScreen() {
  const animationStyle = useFadeIn();

  return (
    <ScrollView style={styles.container}>
      <Animated.View style={animationStyle}>
        <LinearGradient
          colors={['#42A5F5', '#1976D2', '#0D47A1']}
          style={styles.headerContainer}>
          <Image
            source={require('../../assets/images/profil.png')}
            style={styles.profileImage}
          />
        </LinearGradient>

        <View style={styles.profileInfo}>
          {/* GANTI DENGAN NAMA ANDA */}
          <Text style={styles.name}>Alvian Syah Burhani</Text>
          {/* GANTI DENGAN NIM ANDA */}
          <Text style={styles.nim}>NIM: 105841103522</Text>
        </View>

        <View style={styles.detailsContainer}>
          {/* GANTI DENGAN DATA DIRI ANDA */}
          <ProfileDataItem icon="school-outline" label="Fakultas" value="Fakultas Teknik" />
          <ProfileDataItem icon="code-slash-outline" label="Jurusan" value="Teknik Informatika" />
          <ProfileDataItem icon="people-outline" label="Kelas" value="IF A 22" />
        </View>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  headerContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  profileInfo: {
    alignItems: 'center',
    marginTop: -75, // Tarik ke atas agar foto berada di tengah
    backgroundColor: 'transparent',
  },
  name: {
    fontFamily: 'Playfair-Bold',
    fontSize: 26,
    color: '#212529',
    marginTop: 85, // Beri ruang dari foto
  },
  nim: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 16,
    color: '#6C757D',
    marginTop: 4,
  },
  detailsContainer: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  dataItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    shadowColor: '#ADB5BD',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  icon: {
    marginRight: 20,
  },
  dataLabel: {
    fontFamily: 'PlusJakartaSans-Regular',
    fontSize: 14,
    color: '#6C757D',
    marginBottom: 2,
  },
  dataValue: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 16,
    color: '#212529',
  },
});
