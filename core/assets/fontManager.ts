// core/assets/fontManager.ts
export const staticFontsToLoad = {
  // Ganti nama file ini sesuai dengan yang Anda unduh!
  'Roboto-Regular': require('../../assets/fonts/static/Roboto-Regular.ttf'),
  'Roboto-Bold': require('../../assets/fonts/static/Roboto-Bold.ttf'),
  'Lato-Regular': require('../../assets/fonts/static/Lato-Regular.ttf'),
  'Lato-Bold': require('../../assets/fonts/static/Lato-Bold.ttf'),
  'Oswald-Regular': require('../../assets/fonts/static/Oswald-Regular.ttf'),
};

export const variableFontsToLoad = {
  // Ganti nama file ini sesuai dengan yang Anda unduh!
  'Inter-Variable': require('../../assets/fonts/variable/Inter-VariableFont_slnt,wght.ttf'),
  'WorkSans-Variable': require('../../assets/fonts/variable/WorkSans-VariableFont_wght.ttf'),
  'Manrope-Variable': require('../../assets/fonts/variable/Manrope-VariableFont_wght.ttf'),
  'SourceSans3-Variable': require('../../assets/fonts/variable/SourceSans3-VariableFont_wght.ttf'),
  'Outfit-Variable': require('../../assets/fonts/variable/Outfit-VariableFont_wght.ttf'),
};

// Gabungkan semua nama font family untuk digunakan di UI
export const allFontFamilies = [
  ...Object.keys(staticFontsToLoad), 
  ...Object.keys(variableFontsToLoad)
];