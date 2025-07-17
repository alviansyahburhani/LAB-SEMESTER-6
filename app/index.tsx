// app/index.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function MainMenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Tugas</Text>

      <Link href="/tugas1" style={styles.link}>
        <Text style={styles.linkText}>Buka Tugas 1: Bentuk Geometris</Text>
      </Link>

      <Link href="/tugas2" style={styles.link}>
        <Text style={styles.linkText}>Buka Tugas 2: Grid Interaktif</Text>
      </Link>

      <Link href="/tugas4" style={styles.link}>
        <Text style={styles.linkText}>Buka Tugas 3: Display Font Dinamis</Text>
      </Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#121212' 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
    marginBottom: 40 
  },
  link: { 
    backgroundColor: '#0A84FF', 
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 10, 
    marginVertical: 10, 
    width: '80%', 
    alignItems: 'center' 
  },
  linkText: { 
    color: '#FFFFFF', 
    fontSize: 16, 
    fontWeight: '500' 
  },
});