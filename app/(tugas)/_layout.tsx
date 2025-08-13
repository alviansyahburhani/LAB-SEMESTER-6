// app/_layout.tsx
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShadowVisible: false }}>
        {/* Grup tabs kamu */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Halaman detail di luar tabs */}
        <Stack.Screen name="mahasiswa/[nim]" options={{ title: "Detail Mahasiswa" }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
