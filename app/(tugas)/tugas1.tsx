
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


const theme = {
  colors: {
    backgroundStart: '#1D2B64',
    backgroundEnd: '#F8CDDA',
    card: 'rgba(255, 255, 255, 0.15)',
    primaryText: '#FFFFFF',
    shadow: '#000000',
    triangle: '#FFC371',
    accent: '#FFAB76',
  },
  spacing: {
    padding: 20,
    cardMargin: 15,
  },
  radius: {
    card: 18,
  },
};


const uiElements = [
  {
    type: 'triangle',
    key: 'deco-triangle',
  },
  {
    type: 'rectangle',
    key: 'name-card',
    title: 'NAMA LENGKAP',
    value: 'ALVIAN SYAH BURHANI',
  },
  {
    type: 'capsule',
    key: 'nim-capsule',
    title: 'STAMBUK',
    value: '105841103522',
  },
];


const renderUIElement = (element: any) => {
  switch (element.type) {
    case 'triangle':

      return <View key={element.key} style={styles.triangleShape} />;

    case 'rectangle':
      return (
        <View key={element.key} style={[styles.cardBase, styles.rectangleCard]}>
          <Text style={styles.titleText}>{element.title}</Text>
          <Text style={styles.valueText}>{element.value}</Text>
        </View>
      );

    case 'capsule':
      return (
        <View key={element.key} style={[styles.cardBase, styles.capsuleCard]}>
          <Text style={styles.titleText}>{element.title}</Text>
          <Text style={styles.valueText}>{element.value}</Text>
        </View>
      );

    default:
      return null;
  }
};



export default function ProScreen() {
  return (
    <LinearGradient
      colors={[theme.colors.backgroundStart, theme.colors.backgroundEnd]}
      style={styles.fullScreen}
    >
      <SafeAreaView style={styles.fullScreen}>
        <StatusBar barStyle="light-content" />
        <View style={styles.container}>
        
          {uiElements.map(renderUIElement)}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing.padding,
  },
  cardBase: {
    width: '90%',
    backgroundColor: theme.colors.card,
    borderRadius: theme.radius.card,
    padding: theme.spacing.padding,
    marginVertical: theme.spacing.cardMargin,

    shadowColor: theme.colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  rectangleCard: {

  },
  capsuleCard: {
    borderRadius: 100,
  },
  titleText: {
    color: theme.colors.primaryText,
    fontSize: 14,
    fontWeight: '300',
    opacity: 0.8,
  },
  valueText: {
    color: theme.colors.primaryText,
    fontSize: 20,
    fontWeight: '600',
    marginTop: 5,
  },
  triangleShape: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 115,
    borderRightWidth: 115,
    borderBottomWidth: 120,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: theme.colors.triangle,
    position: 'absolute',
    top: 120,
  },
});