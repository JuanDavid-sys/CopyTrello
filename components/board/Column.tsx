import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Pressable, StyleSheet, Dimensions } from 'react-native';
import { Column as ColumnType, Card as CardType } from './types';
import { Card } from './Card';
import { Addicon, Cancelicon } from '../Icons';

interface ColumnProps {
    item: ColumnType; // Propiedad para los datos de la columna.
    onAddCard: (columnId: string, newCard: CardType) => void; // Función para añadir una tarjeta.
    isAddingCard: boolean; // Indica si esta columna tiene el formulario abierto.
    setActiveColumn: (columnId: string | null) => void; // Función para alternar la columna activa.
}

export const Column = ({ item, onAddCard, isAddingCard, setActiveColumn }: ColumnProps) => {
    const [newCardTitle, setNewCardTitle] = useState(''); // Estado para almacenar el título de la nueva tarjeta.

    const handleAddCard = () => {
        if (!newCardTitle.trim()) return;

        const newCard: CardType = {
            id: Date.now().toString(),
            title: newCardTitle.trim(),
            description: '',
        };

        onAddCard(item.id, newCard); // Añade la tarjeta.
        setNewCardTitle(''); // Limpia el título.
        setActiveColumn(null); // Cierra el formulario.
    };

    const maxHeight = Dimensions.get('window').height * 0.85;

    return (
        <View style={[styles.column, { maxHeight }]}>
            <View style={styles.ColumnHeader}>
                <Text style={styles.columnTitle}>{item.title}</Text>
                <Pressable
                    style={styles.CancelcardButton}
                >
                    <Cancelicon size={20} color="white" />
                </Pressable>
            </View>

                <FlatList
                    data={item.cards}
                    renderItem={({ item: card }) => <Card item={card} />}
                    keyExtractor={(card) => card.id}
                    style={styles.flatList}
                    contentContainerStyle={item.cards.length === 0 ? styles.emptyList : null}
                />
                {isAddingCard && (
                    <View>
                        <TextInput
                            style={styles.newCardInput}
                            placeholder="Nueva tarjeta"
                            value={newCardTitle}
                            onChangeText={setNewCardTitle}
                        />
                        <View style={styles.contentAddcardButtons}>
                            <Pressable
                                style={styles.AddcardButton}
                                onPress={handleAddCard}
                            >
                                <Text>Añadir Tarjeta</Text>
                            </Pressable>
                            <Pressable
                                style={styles.CancelcardButton}
                                onPress={() => setActiveColumn(null)} // Cierra el formulario.
                            >
                                <Cancelicon size={20} color="white" />
                            </Pressable>
                        </View>
                    </View>
                )}

            <View style={styles.columnFooter}>
                {!isAddingCard && (
                    <View>
                        <TouchableOpacity
                            style={styles.addCardButton}
                            onPress={() => setActiveColumn(item.id)} // Establece esta columna como activa.
                        >
                            <Addicon size={17} color="#B6C2CF" />
                            <Text style={styles.addCardButtonText}> Añade una Tarjeta</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    column: {
        flex: 1,
        width: 270,
        borderWidth: 1,
        padding: 12,
        backgroundColor: '#101204',
        marginHorizontal: 8,
        borderRadius: 12,
    },
    ColumnHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    columnTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#B6C2CF',
        flexShrink: 1, // Permite que el título se ajuste
        marginRight: 8, // Espacio entre el título y el botón
    },
    flatList: {
        flexGrow: 0, // Permite que crezca dinámicamente hasta el máximo permitido
      },
    columnFooter: {
        flex: 0,
        marginTop: 8,
        justifyContent: 'center',
    },
    addCardButton: {
        flexDirection: 'row',
        borderRadius: 999,
        paddingHorizontal: 4,
        paddingVertical: 2,
    },
    addCardButtonText: {
        color: '#B6C2CF',
    },
    newCardInput: {
        backgroundColor: '#22272b',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        color: '#B6C2CF',
        fontSize: 16,
        marginTop: 5,
    },
    contentAddcardButtons: {
        flexDirection: 'row',
    },
    AddcardButton: {
        backgroundColor: '#579DFF',
        maxWidth: 105,
        paddingHorizontal: 5,
        paddingVertical: 5,
        borderRadius: 3,
    },
    CancelcardButton: {
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
    emptyList: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});
