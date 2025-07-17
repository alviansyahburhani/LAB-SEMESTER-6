import { Stack } from "expo-router";
import { useFonts } from "expo-font";


SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    winkyRough: require("./WinkyRough.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && error) {
    return null; // tetap tampilkan splash screen sampai font siap
  }

  return <Stack />;
}