import React,  { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Pressable } from 'react-native';
import { Column as ColumnType, Card as CardType } from './types';
import { Card } from './Card';
import { styles } from './styles';
import { useTailwind } from 'tailwind-rn';
import { Addicon } from '../Icons';

interface ColumnProps {
    item: ColumnType;
}

export const Column = ({ item }: ColumnProps) => {
    const tailwind = useTailwind();
    const [isHovered, setIsHovered] = useState(false);

    const handlePressIn = () => {
        setIsHovered(true);
    };

    const handlePressOut = () => {
        setIsHovered(false);
    };

    return (
        <View style={styles.column}>
            <View style={styles.columnHeader}>
                <Text style={styles.columnTitle}>{item.title}</Text>
                <Text style={styles.cardCount}>{item.cards.length}</Text>
            </View>
            
            <View>
                <FlatList
                    data={item.cards}
                    renderItem={({ item: card }) => <Card item={card} />}
                    keyExtractor={(card) => card.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.columnContent}
                />
            </View>

            <TouchableOpacity
                style={styles.addCardButton}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
            >
                <Addicon size={17} color='white'/>
                <Text style={styles.addCardButtonText}> Añade una Tarjeta</Text>
            </TouchableOpacity>
        </View>
    );
}; 