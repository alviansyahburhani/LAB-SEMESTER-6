import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';

const COLORS = {
  primary: '#0D47A1',
  secondary: '#FFC107',
  inactive: '#8E8E93',
  background: '#F5F5F5',
};

const TabBarIcon = ({
  name,
  color,
  focused,
  label,
}: {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  focused: boolean;
  label: string;
}) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
      <Ionicons name={name} size={26} color={color} />
      <Text
        style={{
          color,
          fontSize: 10,
          marginTop: 2,
          fontFamily: focused ? 'PlusJakartaSans-Bold' : 'PlusJakartaSans-Regular',
        }}
      >
        {label}
      </Text>
    </View>
  );
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 10,
          shadowOpacity: 0.1,
          height: 80,
        },
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Playfair-Bold',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'home' : 'home-outline'}
              color={color}
              focused={focused}
              label="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'information-circle' : 'information-circle-outline'}
              color={color}
              focused={focused}
              label="About"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="arsip"
        options={{
          title: 'Arsip Tugas',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'archive' : 'archive-outline'}
              color={color}
              focused={focused}
              label="Arsip"
            />
          ),
        }}
      />

      {/* ⬇️ Tambahkan TAB Mahasiswa di sini (sebelum Profil) */}
      <Tabs.Screen
        name="Mahasiswa"
        options={{
          title: 'Mahasiswa',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'people' : 'people-outline'}
              color={color}
              focused={focused}
              label="Mahasiswa"
            />
          ),
        }}
      />

      {/* Profil diletakkan setelah Mahasiswa */}
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? 'person' : 'person-outline'}
              color={color}
              focused={focused}
              label="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}
