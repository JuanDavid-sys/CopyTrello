import React, { useState, useEffect } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Column } from './Column';
import { Column as ColumnType, Card as CardType } from './types';
import ButtonAddList from './ButtonAddList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalComponent from './ModalComponent';

const initialColumns: ColumnType[] = [
    {
        id: '1',
        title: 'Por hacer',
        cards: [
            { id: 'card1', title: 'Tarea 1', description: 'Descripción de la tarea 1' },
            { id: 'card2', title: 'Tarea 2', description: 'Descripción de la tarea 2' },
            { id: 'card3', title: 'Tarea 3', description: 'Descripción de la tarea 3' },
            { id: 'card4', title: 'Tarea 4', description: 'Descripción de la tarea 4' },
            { id: 'card5', title: 'Tarea 5', description: 'Descripción de la tarea 1' },
            { id: 'card6', title: 'Tarea 6', description: 'Descripción de la tarea 2' },
            { id: 'card7', title: 'Tarea 7', description: 'Descripción de la tarea 3' },
            { id: 'card8', title: 'Tarea 8', description: 'Descripción de la tarea 4' },
        ]
    }
];

const Board = () => {
    const [columns, setColumns] = useState<ColumnType[]>([]);
    const [activeColumn, setActiveColumn] = useState<string | null>(null);

    const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = (card: CardType) => {
        setSelectedCard(card);
        setModalVisible(true);
    };

    // Función para cerrar el modal
    const closeModal = () => {
        setSelectedCard(null);
        setModalVisible(false);
    };

    useEffect(() => {
        const loadColumns = async () => {
            try {
                const savedColumns = await AsyncStorage.getItem('columns');
                if (savedColumns) {
                    setColumns(JSON.parse(savedColumns));
                }
            } catch (error) {
                console.error('Error loading columns from AsyncStorage:', error);
            }
        };

        loadColumns();
    }, []);

    useEffect(() => {
        const saveColumns = async () => {
            try {
                await AsyncStorage.setItem('columns', JSON.stringify(columns));
            } catch (error) {
                console.error('Error saving columns to AsyncStorage:', error);
            }
        };

        saveColumns();
    }, [columns]);

    // Función para eliminar una columna
    const removeColumn = (columnId: string) => {
        setColumns((prevColumns) => prevColumns.filter((column) => column.id !== columnId));
    };

    const handleAddList = (listName: string) => {
        const newColumnId = (columns.length + 1).toString();

        const newColumn: ColumnType = {
            id: newColumnId,
            title: listName,
            cards: []
        };

        setColumns([...columns, newColumn]);
    };

    const handleAddCard = (columnId: string, newCard: CardType) => {
        setColumns((prevColumns) =>
          prevColumns.map((column) =>
            column.id === columnId
              ? { ...column, cards: [...column.cards, newCard] }
              : { ...column }
          )
        );
      };
      
      const handleUpdateColumn = (columnId: string, updatedColumn: ColumnType) => {
        setColumns((prevColumns) =>
          prevColumns.map((column) =>
            column.id === columnId ? { ...updatedColumn } : { ...column }
          )
        );
      };      
    
    return (
        <View style={styles.mainContainer}>
            <ScrollView
                horizontal
                contentContainerStyle={styles.container}
                showsHorizontalScrollIndicator={false}
            >
                {columns.map((column) => (
                    <Column
                        key={column.id}
                        item={column}
                        onAddCard={handleAddCard}
                        onUpdateColumn={handleUpdateColumn} // Pasar la función aquí
                        isAddingCard={activeColumn === column.id}
                        setActiveColumn={setActiveColumn}
                        removeColumn={removeColumn}
                        openModal={openModal}
                    />
                ))}
                <ButtonAddList onAddList={handleAddList} />
            </ScrollView>

            <ModalComponent 
            visible={modalVisible} 
            onClose={closeModal} 
            cardTitle={selectedCard?.title || null} 
        />
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        padding: 10,
        paddingBottom: 20,
        alignItems: 'flex-start',
        minHeight: '100%',
    },

});

export default Board;