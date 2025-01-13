import React, { useState } from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet, View } from 'react-native';
import { Card as CardType } from './types';
import { DescriptionIcon, Cancelicon } from '../Icons';

interface CardProps {
    item: CardType;
    onDeleteCard: (cardId: string) => void; // Nueva prop para manejar la eliminación
    onPress: () => void; // Add onPress to the interface
}

export const Card = ({ item: card, onDeleteCard, onPress }: CardProps) => {

    return (
        <Pressable 
            onPress={onPress}
            style={[styles.card]}>

            <View style={styles.cardContent}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                    {card.title}
                </Text>
                <Pressable style={styles.IconDescriptio}>
                    <DescriptionIcon color="#B6C2CF" />
                </Pressable>
            </View>
            {/* Botón para eliminar tarjeta */}
            <Pressable
                style={styles.DeleteCardButton}
                onPress={() => onDeleteCard(card.id)} // Llama a la función con el ID de la tarjeta
            >
                <Cancelicon size={20} color="white" />
            </Pressable>
        </Pressable>
    );
};


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#22272b',
        padding: 12,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 3,
        borderColor: 'transparent',
        borderWidth: 2,
    },
    cardContent: {
        flex: 1, // Toma el espacio disponible
    },
    cardTitle: {
        fontWeight: 'bold',
        color: '#B6C2CF',
        flexShrink: 1, // Reduce el tamaño si es necesario
        marginRight: 8, // Espacio entre el título y el ícono de descripción
    },

    DeleteCardButton: {
        flexShrink: 0, // Evita que se reduzca el botón
    },
    IconDescriptio: {
        width: 32,
    },
});
