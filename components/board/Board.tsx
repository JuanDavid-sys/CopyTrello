import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Column } from './Column';
import { Column as ColumnType, Card as CardType } from './types';
import { styles } from './styles';
import ButtonAddList from './ButtonAddList';

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
    const [columns, setColumns] = useState<ColumnType[]>(initialColumns);
    const [activeColumn, setActiveColumn] = useState<string | null>(null); // Estado global para controlar el formulario activo.

    const handleAddList = (listName: string) => {
        const newColumnId = (columns.length + 1).toString(); // Generar un ID único para la nueva columna.

        const newColumn: ColumnType = {
            id: newColumnId,
            title: listName,
            cards: []
        };

        setColumns([...columns, newColumn]); // Agregar la nueva columna al estado.
    };

    const handleAddCard = (columnId: string, newCard: CardType) => {
        setColumns((prevColumns) =>
            prevColumns.map((column) =>
                column.id === columnId
                    ? { ...column, cards: [...column.cards, newCard] }
                    : column
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
                        isAddingCard={activeColumn === column.id} // Compara si esta columna es la activa.
                        setActiveColumn={setActiveColumn} // Permite cambiar la columna activa.
                    />
                ))}
                <ButtonAddList onAddList={handleAddList} />
            </ScrollView>
        </View>
    );
};

export default Board;
