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
            { id: 'card5', title: 'Tarea 5', description: 'Descripción de la tarea 5' },
            { id: 'card6', title: 'Tarea 6', description: 'Descripción de la tarea 6' }
        ]
    }
];

const Board = () => {
    const [columns, setColumns] = useState<ColumnType[]>(initialColumns);

    const handleAddList = (listName: string) => {
        // Generar un nuevo ID para la columna
        const newColumnId = (columns.length + 1).toString();

        // Crear la nueva columna
        const newColumn: ColumnType = {
            id: newColumnId,
            title: listName,
            cards: []
        };

        // Agregar la nueva columna al estado
        setColumns([...columns, newColumn]);
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
                    />
                ))}
                <ButtonAddList onAddList={handleAddList} />
            </ScrollView>
        </View>
    );
};

export default Board; 