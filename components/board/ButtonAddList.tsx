import React,  { useState } from 'react';
import { Text, StyleSheet, Pressable, View, TextInput} from 'react-native';
import { Addicon, Cancelicon } from '../Icons';

interface ButtonAddListProps {
    onAddList: (listName: string) => void;
}

const ButtonAddList = ({ onAddList }: ButtonAddListProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [listName, setListName] = useState('');

  const handleAddList = () => {
    if (listName.trim().length > 0) {
      onAddList(listName);
      setIsAdding(false);
      setListName('');
    }
  };

  const handleCancelAddList = () => {
    setIsAdding(false);
    setListName('');
  };

  return (
    <>
      {isAdding ? (
        <View style={[styles.container, styles.addingContainer]}>
          <TextInput
            style={styles.input}
            value={listName}
            onChangeText={setListName}
            placeholder="Nombre de la lista"
          />
          <View style={styles.contentButtons}>
          <Pressable style={styles.addButton} onPress={handleAddList}>
            <Text style={styles.addButtonText}>Añadir lista</Text>
          </Pressable>
          <Pressable style={styles.CancelButton} onPress={handleCancelAddList}>
            <Cancelicon size={20} color="white"/>
          </Pressable>
          </View>
        </View>
      ) : (
        <Pressable style={[styles.container, styles.button]} onPress={() => setIsAdding(true)}>
          <Addicon size={17} color="white" />
          <Text style={styles.buttonText}>Añade otra lista</Text>
        </Pressable>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 15,
    gap: 5,
    minWidth: 276,
  },
  button: {
    backgroundColor: 'rgba(190, 190, 190, 0.5)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addingContainer: {
    flexDirection: 'column',
    backgroundColor: 'rgba(16, 18, 4, 1.00)',
  },
  input: {
    backgroundColor: 'rgba(34, 39, 43, 1.00)',
    color: '#B6C2CF',
    paddingHorizontal: 10,
    borderRadius: 3,
    marginBottom: 5,
    minHeight: 20,
    maxHeight: 256,
    padding: 6,
    overflow: 'hidden',
    fontWeight: '600',
    outlineColor: '#85B8FF',
  },
  addButton: {
    display: 'flex',
    backgroundColor: '#579DFF',
    maxWidth: 95,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 3,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'black',
    fontSize: 14,
  },
  contentButtons: {
    flexDirection: 'row',
  },
  CancelButton: {
    padding: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
});

export default ButtonAddList;
