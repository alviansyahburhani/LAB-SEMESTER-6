// File: app/_layout.tsx

import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Mencegah splash screen hilang sebelum semua aset (termasuk font) siap.
SplashScreen.preventAutoHideAsync();

// Definisikan semua font yang akan dimuat di sini.
// Pastikan path filenya benar sesuai struktur folder proyek Anda.
const fontsToLoad = {
  // 5 Font Statis
  'PlayfairDisplay-Bold': require('../assets/fonts/static/PlayfairDisplay-Bold.ttf'),
  'Nunito-Regular': require('../assets/fonts/static/Nunito-Regular.ttf'),
  'JetBrainsMono-Regular': require('../assets/fonts/static/JetBrainsMono-Regular.ttf'),
  'Lobster-Regular': require('../assets/fonts/static/Lobster-Regular.ttf'),
  'Comfortaa-Bold': require('../assets/fonts/static/Comfortaa-Bold.ttf'),
  // 5 Font Variabel
  'PlusJakartaSans-Variable': require('../assets/fonts/variable/PlusJakartaSans-VariableFont_wght.ttf'),
  'Figtree-Variable': require('../assets/fonts/variable/Figtree-VariableFont_wght.ttf'),
  'Lexend-Variable': require('../assets/fonts/variable/Lexend-VariableFont_wght.ttf'),
  'Urbanist-Variable': require('../assets/fonts/variable/Urbanist-VariableFont_wght.ttf'),
  'DMSans-Variable': require('../assets/fonts/variable/DMSans-VariableFont_opsz,wght.ttf'),
};

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts(fontsToLoad);

  useEffect(() => {
    // Sembunyikan splash screen HANYA JIKA font sudah dimuat atau ada error.
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  // Jika font BELUM dimuat dan TIDAK ada error, jangan render apa-apa.
  // Aplikasi akan tetap menampilkan splash screen.
  if (!fontsLoaded && !fontError) {
    return null;
  }

  // Setelah font siap, render struktur navigasi aplikasi.
  return (
    <Stack>
      <Stack.Screen name="tugas4" options={{ headerShown: false }} />
    </Stack>
  );
}