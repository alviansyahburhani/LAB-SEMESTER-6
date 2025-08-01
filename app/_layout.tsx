import { Stack, SplashScreen } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

// Mencegah splash screen hilang otomatis sebelum font dimuat
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    // Pastikan path ini BENAR sesuai struktur folder Anda
    'Playfair-Bold': require('../assets/fonts/static/PlayfairDisplay-Bold.ttf'),
    'PlusJakartaSans-Regular': require('../assets/fonts/variable/PlusJakartaSans-VariableFont_wght.ttf'),
    'PlusJakartaSans-Bold': require('../assets/fonts/variable/PlusJakartaSans-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    // Jika ada error saat memuat font, ini akan menampilkannya di console
    if (error) {
      console.error("Kesalahan saat memuat font:", error);
    }
    // Sembunyikan splash screen HANYA JIKA font sudah siap
    if (fontsLoaded && !error) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  // Jika font belum siap, jangan render apapun untuk mencegah error
  if (!fontsLoaded && !error) {
    return null;
  }

  // Jika sudah siap, baru render aplikasi
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(tugas)" options={{ headerShown: false }} />
    </Stack>
  );
}