import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import Card from './Card';
import { Addicon, Cancelicon } from "../Icons";

const Column = ({ column, onCardPress }) => (
  <View style={styles.column}>
    <View style={styles.ColumnHeader}>
        <Text style={styles.columnTitle}>{column.name}</Text>
        <Pressable style={styles.CancelcardButton}>
          <Cancelicon size={20} color="white" />
        </Pressable>
      </View>
    <FlatList
      data={column.cards}
      keyExtractor={(card) => card.id}
      renderItem={({ item, index }) => (
        <Card card={item} index={index} columnId={column.id} onPress={onCardPress} />
      )}
      style={styles.flatList}
      contentContainerStyle={column.cards.length === 0 ? styles.emptyList : null}
    />
  </View>
);

const styles = StyleSheet.create({
  column: {
    flexShrink: 1,
    width: 270,
    borderWidth: 1,
    padding: 12,
    backgroundColor: '#101204',
    marginHorizontal: 8,
    borderRadius: 12,
  },
  ColumnHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  columnTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#B6C2CF",
    flexShrink: 1,
    marginRight: 8,
  },
  CancelcardButton: {
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  flatList: {
    flexGrow: 0,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Column;
