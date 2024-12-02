import { Stack } from 'expo-router';
import { StatusBar, Platform, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function Layout() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar backgroundColor="black" />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

// Flujo de Navegación 🔄
// 1. La app inicia en _layout.tsx
// Carga el layout de pestañas (tabs)/_layout.tsx
// Muestra la pantalla principal index.tsx
// 4. La pantalla principal renderiza el tablero