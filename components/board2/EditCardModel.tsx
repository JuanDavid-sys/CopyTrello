import React from 'react';
import {
  View,
  Text,
  Modal,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Platform,
} from 'react-native';
import { CardIcon, Cancelicon, EyeIcon } from '../Icons';

const EditCardModal = ({ visible, card, board, onSave, onClose }) => {
  const [updatedCard, setUpdatedCard] = React.useState(card);
  const { width: screenWidth } = Dimensions.get('window');
  const containerWidth =
    Platform.OS === 'web' && screenWidth > 800 ? '60%' : '95%';

  React.useEffect(() => setUpdatedCard(card), [card]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.backgroundInfoCard}>
          <View style={[styles.ContainerInfoCard, { width: containerWidth }]}>
            {/* Header */}
            <View style={styles.Containerheader}>
              <View style={styles.leftHeaderContainer}>
                <CardIcon style={styles.LeftIcons} />
                <View>
                  <Text style={[styles.HeaderText, styles.Title]}>
                    {updatedCard?.title || 'Nueva Tarjeta'}
                  </Text>
                  <View style={styles.ContentOptionsList}>
                    <Text style={[styles.HeaderText]}>
                      En la Lista
                      <Pressable style={[styles.OptionsList, { marginLeft: 5 }]}>
                        <Text style={styles.HeaderText}>
                          {board.find(
                            (col) =>
                              col.id ===
                              (updatedCard?.newColumnId || updatedCard?.columnId)
                          )?.name || 'Selecciona una lista'}
                        </Text>
                      </Pressable>
                    </Text>
                  </View>
                </View>
              </View>
              <Pressable onPress={onClose}>
                <Cancelicon style={[styles.LeftIcons, { marginRight: 0 }]} />
              </Pressable>
            </View>

            {/* Main Content */}
            <View style={styles.DescriptionContent}>
              <View style={{ flexDirection: 'column', width: '100%' }}>
                {/* Edit Title */}
                <Text style={[styles.HeaderText, { marginBottom: 5 }]}>
                  Título
                </Text>
                <TextInput
                  style={[styles.input]}
                  value={updatedCard.title}
                  placeholder="Escribe el título..."
                  placeholderTextColor="#9fadbc"
                  onChangeText={(text) =>
                    setUpdatedCard({ ...updatedCard, title: text })
                  }
                />

                {/* Select Column */}
                <Text style={[styles.HeaderText, { marginBottom: 5 }]}>
                  Seleccionar columna
                </Text>
                {board.map((col) => (
                  <Pressable
                    key={col.id}
                    style={[
                      styles.optionsButtonsRight,
                      col.id ===
                        (updatedCard?.newColumnId || updatedCard?.columnId) &&
                        styles.selectedOption,
                    ]}
                    onPress={() =>
                      setUpdatedCard({ ...updatedCard, newColumnId: col.id })
                    }
                  >
                    <EyeIcon size={16} style={styles.LeftIcons} />
                    <Text style={styles.HeaderText}>{col.name}</Text>
                  </Pressable>
                ))}

                {/* Select Position */}
                <Text style={[styles.HeaderText, { marginTop: 15 }]}>
                  Seleccionar posición
                </Text>
                <TextInput
                  style={[styles.input]}
                  keyboardType="number-pad"
                  placeholder="Posición (1-n)"
                  placeholderTextColor="#9fadbc"
                  onChangeText={(text) => {
                    const position = parseInt(text, 10);
                    setUpdatedCard({
                      ...updatedCard,
                      newPosition: isNaN(position) ? undefined : position - 1,
                    });
                  }}
                />
              </View>
            </View>

            {/* Footer */}
            <View style={styles.Footer}>
              <Pressable
                style={[styles.optionsButtonsRight, { backgroundColor: '#4CAF50' }]}
                onPress={() => onSave(updatedCard)}
              >
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}>Guardar</Text>
              </Pressable>
              <Pressable
                style={[styles.optionsButtonsRight, { backgroundColor: '#F44336' }]}
                onPress={onClose}
              >
                <Cancelicon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backgroundInfoCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ContainerInfoCard: {
    backgroundColor: '#323940',
    height: '90%',
    borderRadius: 10,
    padding: 20,
  },
  Containerheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeaderContainer: {
    flexDirection: 'row',
  },
  LeftIcons: {
    marginRight: 10,
    color: '#9fadbc',
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ContentOptionsList: {
    marginTop: 7,
    marginBottom: 15,
    alignItems: 'center',
  },
  OptionsList: {
    backgroundColor: '#A1BDD914',
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 4,
  },
  input: {
    backgroundColor: '#22272b',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    color: '#9fadbc',
  },
  HeaderText: {
    color: '#9fadbc',
  },
  DescriptionContent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  Footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  optionsButtonsRight: {
    flexDirection: 'row',
    backgroundColor: '#A1BDD914',
    borderRadius: 3,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#cce5ff',
  },
});

export default EditCardModal;
