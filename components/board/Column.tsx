import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  Pressable,
  TouchableOpacity,
  Dimensions,
  Alert,
  StyleSheet,
  Platform,
} from "react-native";
import { Column as ColumnType, Card as CardType } from "./types";
import { Card } from "./Card";
import { Addicon, Cancelicon } from "../Icons";

interface ColumnProps {
  item: ColumnType;
  onAddCard: (columnId: string, newCard: CardType) => void;
  onUpdateColumn: (columnId: string, updatedColumn: ColumnType) => void;
  isAddingCard: boolean;
  setActiveColumn: (columnId: string | null) => void;
  removeColumn: (columnId: string) => void;
}

export const Column = ({
  item,
  onAddCard,
  onUpdateColumn,
  isAddingCard,
  setActiveColumn,
  removeColumn,
}: ColumnProps) => {
  const [newCardTitle, setNewCardTitle] = useState("");
  const newCardInputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (isAddingCard && newCardInputRef.current) {
      newCardInputRef.current.focus();
    }
  }, [isAddingCard]);

  const handleAddCard = () => {
    if (!newCardTitle.trim()) return;

    const newCard: CardType = {
      id: Date.now().toString(),
      title: newCardTitle.trim(),
      description: "",
    };

    onAddCard(item.id, newCard);
    setNewCardTitle("");
    setActiveColumn(null);
  };

  const handleRemoveColumn = () => {
    // Si la columna está vacía, elimina directamente
    if (item.cards.length === 0) {
      removeColumn(item.id);
      return;
    }

    const confirmMessage = `¿Deseas eliminar la columna "${item.title}" con sus ${item.cards.length} tareas?`;

    // Web: Usar window.confirm
    if (Platform.OS === "web") {
      if (window.confirm(confirmMessage)) {
        removeColumn(item.id);
      }
    } else {
      // Móviles: Usar Alert.alert
      Alert.alert(
        "Confirmación",
        confirmMessage,
        [
          { text: "Cancelar", style: "cancel" },
          { text: "Eliminar", style: "destructive", onPress: () => removeColumn(item.id) },
        ]
      );
    }
  };

  const maxHeight = Dimensions.get("window").height * 0.85;

  return (
    <View style={[styles.column, { maxHeight }]}>
      <View style={styles.ColumnHeader}>
        <Text style={styles.columnTitle}>{item.title}</Text>
        <Pressable style={styles.CancelcardButton} onPress={handleRemoveColumn}>
          <Cancelicon size={20} color="white" />
        </Pressable>
      </View>

      <FlatList
        data={item.cards}
        renderItem={({ item: card }) => (
          <Card
            item={card}
            onDeleteCard={(cardId) => {
              const updatedCards = item.cards.filter((c) => c.id !== cardId);
              const updatedColumn = { ...item, cards: updatedCards };
              onUpdateColumn(item.id, updatedColumn);
            }}
          />
        )}
        keyExtractor={(card) => card.id}
        style={styles.flatList}
        contentContainerStyle={item.cards.length === 0 ? styles.emptyList : null}
      />

      {isAddingCard && (
        <View>
          <TextInput
            ref={newCardInputRef}
            style={styles.newCardInput}
            placeholder="Nueva tarjeta"
            value={newCardTitle}
            onChangeText={setNewCardTitle}
            onSubmitEditing={handleAddCard}
          />
          <View style={styles.contentAddcardButtons}>
            <Pressable style={styles.AddcardButton} onPress={handleAddCard}>
              <Text>Añadir Tarjeta</Text>
            </Pressable>
            <Pressable
              style={styles.CancelcardButton}
              onPress={() => setActiveColumn(null)}
            >
              <Cancelicon size={20} color="white" />
            </Pressable>
          </View>
        </View>
      )}

      <View style={styles.columnFooter}>
        {!isAddingCard && (
          <TouchableOpacity
            style={styles.addCardButton}
            onPress={() => setActiveColumn(item.id)}
          >
            <Addicon size={17} color="#B6C2CF" />
            <Text style={styles.addCardButtonText}> Añade una Tarjeta</Text>
          </TouchableOpacity>
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
    backgroundColor: "#101204",
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
  flatList: {
    flexGrow: 0,
  },
  columnFooter: {
    flex: 0,
    marginTop: 8,
    justifyContent: "center",
  },
  addCardButton: {
    flexDirection: "row",
    borderRadius: 999,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  addCardButtonText: {
    color: "#B6C2CF",
  },
  newCardInput: {
    backgroundColor: "#22272b",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    color: "#B6C2CF",
    fontSize: 16,
    marginTop: 5,
  },
  contentAddcardButtons: {
    flexDirection: "row",
  },
  AddcardButton: {
    backgroundColor: "#579DFF",
    maxWidth: 105,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 3,
  },
  CancelcardButton: {
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  emptyList: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
