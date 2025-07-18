import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Mencegah splash screen hilang sebelum semua aset (termasuk font) siap.
SplashScreen.preventAutoHideAsync();

// Daftar 10 font unik yang akan dimuat.
// Pastikan nama file di sini sama persis dengan nama file yang Anda unggah ke folder assets.
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
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="tugas4" options={{ headerShown: false }} />
    </Stack>
  );
}