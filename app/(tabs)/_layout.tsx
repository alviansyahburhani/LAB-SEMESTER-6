import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

// Skema warna profesional yang terinspirasi dari Unismuh
const COLORS = {
  primary: '#0D47A1', // Biru tua khas Unismuh
  secondary: '#FFC107', // Aksen kuning
  inactive: '#8E8E93', // Abu-abu standar iOS untuk teks tidak aktif
  background: '#F5F5F5',
};

// Komponen kustom untuk Tab Bar Icon dan Label
const TabBarIcon = ({ name, color, focused, label }: { name: keyof typeof Ionicons.glyphMap, color: string, focused: boolean, label: string }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
      <Ionicons name={name} size={26} color={color} />
      <Text style={{ color: color, fontSize: 10, marginTop: 2, fontFamily: focused ? 'PlusJakartaSans-Bold' : 'PlusJakartaSans-Regular' }}>
        {label}
      </Text>
    </View>
  );
};

/**
 * Layout untuk navigasi Tab Bar di bagian bawah.
 * Mengatur ikon, label, dan gaya untuk setiap tab.
 */
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.inactive,
        // Menyembunyikan label default karena kita sudah buat komponen kustom
        tabBarShowLabel: false, 
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
          height: 80, // Menambah tinggi untuk memberi ruang pada label di bawah
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Playfair-Bold', // Menggunakan font kustom di header
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} focused={focused} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'information-circle' : 'information-circle-outline'} color={color} focused={focused} label="About" />
          ),
        }}
      />
      <Tabs.Screen
        name="arsip"
        options={{
          title: 'Arsip Tugas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'archive' : 'archive-outline'} color={color} focused={focused} label="Arsip" />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          // Ikon profil diganti menjadi ikon 'user' standar
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} focused={focused} label="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}
