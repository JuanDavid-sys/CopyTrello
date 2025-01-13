import React, { useState } from 'react';
import { View, FlatList, StyleSheet, ScrollView, } from 'react-native';
import Column from './Column';
import EditCardModal from './EditCardModel';

const KanbanBoard = ({ initialBoard = {} }) => {
  const [board, setBoard] = useState(initialBoard);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openModal = (card, columnId) => {
    setSelectedCard({ ...card, columnId });
    setModalVisible(true);
  };

  const saveCard = (updatedCard) => {
    setBoard((prevBoard) => {
      const updatedBoard = [...prevBoard];
      const { id, title, columnId, newColumnId, newPosition } = updatedCard;

      const currentColumnIndex = updatedBoard.findIndex((col) => col.id === columnId);
      if (currentColumnIndex === -1) return prevBoard;

      const cardIndex = updatedBoard[currentColumnIndex].cards.findIndex((card) => card.id === id);
      const [card] = updatedBoard[currentColumnIndex].cards.splice(cardIndex, 1);

      const targetColumnIndex = updatedBoard.findIndex((col) => col.id === (newColumnId || columnId));
      if (targetColumnIndex === -1) return prevBoard;

      const targetPosition =
        newPosition !== undefined && newPosition >= 0
          ? newPosition
          : updatedBoard[targetColumnIndex].cards.length;

      updatedBoard[targetColumnIndex].cards.splice(targetPosition, 0, { ...card, title });
      return updatedBoard;
    });

    setModalVisible(false);
    setSelectedCard(null);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={board}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item: column }) => (
          <Column column={column} onCardPress={openModal} />
        )}
      />
      {selectedCard && (
        <EditCardModal
          visible={modalVisible}
          card={selectedCard}
          board={board}
          onSave={saveCard}
          onClose={() => setModalVisible(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

});

export default KanbanBoard;
