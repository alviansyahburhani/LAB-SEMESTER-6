import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { View } from 'react-native';

// Skema warna profesional yang terinspirasi dari Unismuh
const COLORS = {
  primary: '#0D47A1', // Biru tua khas Unismuh
  secondary: '#FFC107', // Aksen kuning
  inactive: '#BDBDBD', // Abu-abu untuk tab tidak aktif
  background: '#F5F5F5',
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
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
          height: 60,
          paddingBottom: 5,
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} size={26} color={color} />
          ),
        }}
      />
      {/* === TAB BARU DITAMBAHKAN DI SINI === */}
      <Tabs.Screen
        name="arsip"
        options={{
          title: 'Arsip Tugas',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'archive' : 'archive-outline'} size={24} color={color} />
          ),
        }}
      />
      {/* ===================================== */}
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome5 name={focused ? 'user-alt' : 'user'} size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
