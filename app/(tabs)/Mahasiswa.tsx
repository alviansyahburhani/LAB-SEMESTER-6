// app/(tabs)/Mahasiswa.tsx
import React from "react";
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { MAHASISWA } from "../../util/Mahasiswa";

export default function MahasiswaListScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={MAHASISWA}
        keyExtractor={(item) => item.nim}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              router.push({ pathname: "/mahasiswa/[nim]", params: { nim: item.nim } })
            }
            style={styles.row}
            android_ripple={{ color: "#eee" }}
          >
            <View style={styles.left}>
              <Ionicons name="person-circle-outline" size={22} />
              <Text style={styles.nama}>{item.nama}</Text>
            </View>
            <Ionicons name="chevron-forward" size={18} />
          </Pressable>
        )}
        ItemSeparatorComponent={() => <View style={styles.sep} />}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8fafc" },
  list: { backgroundColor: "#fff" },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: { flexDirection: "row", gap: 10, alignItems: "center" },
  nama: { fontSize: 16, color: "#111827" },
  sep: { height: StyleSheet.hairlineWidth, backgroundColor: "#e5e7eb" },
});
