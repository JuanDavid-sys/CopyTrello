import React from 'react';
import { Pressable, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Addicon, Cancelicon, DescriptionIcon } from "../Icons";

const Card = ({ card, index, columnId, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(card, columnId)}>
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle} numberOfLines={1}>
        {`${index + 1}. ${card.title}`}
      </Text>
      <Pressable style={styles.DescriptionIcon}>
        <DescriptionIcon color="#B6C2CF" />
      </Pressable>
    </View>
    <Pressable
      style={styles.DeleteCardButton}
    >
      <Cancelicon size={20} color="white" />
    </Pressable>
  </TouchableOpacity>
);

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
DescriptionIcon: {
  width: 32,
},
});

export default Card;
