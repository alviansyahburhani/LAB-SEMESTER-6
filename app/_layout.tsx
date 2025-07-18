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
  'Roboto-Regular': require('../assets/fonts/static/Roboto-Regular.ttf'),
  'Lato-Bold': require('../assets/fonts/static/Lato-Bold.ttf'),
  'Oswald-Regular': require('../assets/fonts/static/Oswald-Regular.ttf'),
  'Raleway-Bold': require('../assets/fonts/static/Raleway-Bold.ttf'),
  'Montserrat-Regular': require('../assets/fonts/static/Montserrat-Regular.ttf'),
  // 5 Font Variabel
  'Inter-Variable': require('../assets/fonts/variable/Inter-VariableFont_opsz,wght.ttf'),
  'WorkSans-Variable': require('../assets/fonts/variable/WorkSans-VariableFont_wght.ttf'),
  'Manrope-Variable': require('../assets/fonts/variable/Manrope-VariableFont_wght.ttf'),
  'SourceSans3-Variable': require('../assets/fonts/variable/SourceSans3-VariableFont_wght.ttf'),
  'Outfit-Variable': require('../assets/fonts/variable/Outfit-VariableFont_wght.ttf'),
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