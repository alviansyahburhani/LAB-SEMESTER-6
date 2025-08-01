import { Stack } from 'expo-router';

/**
 * Layout utama aplikasi.
 * Menyembunyikan header default dan menampilkan layout tabs.
 */
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
