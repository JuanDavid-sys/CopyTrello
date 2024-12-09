import React from 'react';
import { TouchableOpacity, Text, Pressable } from 'react-native';
import { Card as CardType } from './types';
import { styles } from './styles';
import { DescriptionIcon } from '../Icons';

interface CardProps {
    item: CardType;
}

export const Card = ({ item: card }: CardProps) => {
    return (
        <TouchableOpacity style={styles.card}>
            <Text style={styles.cardTitle}>{card.title}</Text>
            <Pressable>
                <DescriptionIcon color='#B6C2CF'/>
            </Pressable>
        </TouchableOpacity>
    );
}; 