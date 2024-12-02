import { Tabs } from 'expo-router'; // Tabs es un componente usado para crear la navegacion por pestañas
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#ffffff',
          display: 'none',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tablero',
          tabBarLabel: 'Tablero',
        }}
      />
    </Tabs>
  );
}


// por el momento no entiendo vien que hace este archivo, pero se supone que es necesario para que funcione la navegacion 