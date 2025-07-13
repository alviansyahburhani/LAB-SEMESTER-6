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
    </View>
  );
}

// (Gunakan style dari jawaban sebelumnya atau buat style baru)
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#FFF', marginBottom: 40 },
  link: { backgroundColor: '#0A84FF', padding: 15, borderRadius: 10, marginVertical: 10 },
  linkText: { color: '#FFF', fontSize: 16 },
});