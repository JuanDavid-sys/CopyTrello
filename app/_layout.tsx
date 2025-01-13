import React from "react";
import { Stack } from "expo-router";
import { StatusBar, Platform, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "../store";

export default function Layout() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <StatusBar backgroundColor="black" />
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

// Flujo de Navegación 🔄
// 1. La app inicia en _layout.tsx
// Carga el layout de pestañas (tabs)/_layout.tsx
// Muestra la pantalla principal index.tsx
// 4. La pantalla principal renderiza el tablero
