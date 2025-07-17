// core/ui/NameCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { allFontFamilies } from '../assets/fontManager';

interface NameCardProps {
  name: string;
  index: number; // Index 0-9 dari 10 nama yang ditampilkan
}

const NameCard = ({ name, index }: NameCardProps) => {
  // Terapkan salah satu dari 10 font secara berurutan
  const fontFamily = allFontFamilies[index];
  const isVariableFont = fontFamily.includes('Variable');
  
  // TEKNIK UNIK: Terapkan font-weight dinamis untuk variable font
  const dynamicWeight = isVariableFont ? `${(index - 4) * 100 + 500}` as any : 'normal';

  return (
    <View style={styles.card}>
      <Text style={[styles.text, { fontFamily, fontWeight: dynamicWeight }]}>
        {name}
      </Text>
      <Text style={styles.fontInfo}>{fontFamily} {isVariableFont && `(${dynamicWeight})`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { padding: 15, backgroundColor: '#2c2c2e', borderRadius: 10, marginVertical: 5 },
  text: { color: 'white', fontSize: 20 },
  fontInfo: { color: '#8e8e93', fontSize: 12, marginTop: 4 },
});

export default React.memo(NameCard);