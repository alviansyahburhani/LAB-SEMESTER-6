import { Stack } from 'expo-router';

// Layout ini akan memberikan header pada setiap halaman tugas
export default function TugasLayout() {
  return (
    <Stack>
      {/* Opsi ini bisa dikustomisasi lebih lanjut jika perlu */}
      <Stack.Screen options={{ headerShown: true }} />
    </Stack>
  );
}