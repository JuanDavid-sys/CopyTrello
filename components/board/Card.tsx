import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Card as CardType } from './types';
import { styles } from './styles';

interface CardProps {
    item: CardType;
}

export const Card = ({ item: card }: CardProps) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Text style={styles.cardDescription}>{card.description}</Text>
        </TouchableOpacity>
    );
}; 