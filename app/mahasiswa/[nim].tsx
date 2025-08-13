// app/mahasiswa/[nim].tsx
import React, { useMemo } from "react";
import { useLocalSearchParams, router } from "expo-router";
import { Alert, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MAHASISWA } from "../../util/Mahasiswa";

export default function DetailMahasiswa() {
  const { nim } = useLocalSearchParams<{ nim: string }>();

  const data = useMemo(
    () => MAHASISWA.find((m) => m.nim === String(nim)),
    [nim]
  );

  if (!data) {
    Alert.alert("Data tidak ditemukan", "Mahasiswa dengan NIM tersebut tidak ada.", [
      { text: "OK", onPress: () => router.back() },
    ]);
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: data.foto }} style={styles.foto} />
        <Text style={styles.nama}>{data.nama}</Text>
        <Text style={styles.nim}>NIM: {data.nim}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#f8fafc" },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  foto: { width: 160, height: 160, borderRadius: 80, marginBottom: 16, backgroundColor: "#e5e7eb" },
  nama: { fontSize: 20, fontWeight: "700", color: "#111827" },
  nim: { marginTop: 6, fontSize: 14, color: "#374151" },
});
