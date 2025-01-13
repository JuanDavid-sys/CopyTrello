import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Board from '../../components/board/Board';
import { Header } from '../../components/board/Header';
import { InfoCard } from '@/components/board/InfoCard';
import KanbanBoard from '@/components/board2/KanbanBoard'

export default function HomeScreen() {
  const initialBoard = [
    { id: 'col-1', name: 'Columna 1', cards: Array.from({ length: 5 }, (_, i) => ({ id: `col-1-card-${i}`, title: `Tarjeta ${i + 1}` })) },
    { id: 'col-2', name: 'Columna 2', cards: Array.from({ length: 5 }, (_, i) => ({ id: `col-2-card-${i}`, title: `Tarjeta ${i + 1}` })) },
    { id: 'col-3', name: 'Columna 3', cards: Array.from({ length: 1 }, (_, i) => ({ id: `col-3-card-${i}`, title: `Tarjeta ${i + 1}` })) },
  ];

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <LinearGradient
      colors={['#8B0076','#4B0082']}
      style={styles.container}
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 1 }}
    >
      <Header />
      <Board />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
