import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
  Pressable,
} from "react-native";
import { Cancelicon, CardIcon, EyeIcon, DescriptionIcon } from "../Icons";

const ModalComponent = ({
  visible,
  onClose,
  cardTitle,
}: {
  visible: boolean;
  onClose: () => void;
  cardTitle: string | null;
}) => {
  const { width: screenWidth } = Dimensions.get("window");

  const containerWidth =
    Platform.OS === "web" && screenWidth > 800 ? "60%" : "95%";

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={[styles.ContainerInfoCard, { width: containerWidth }]}>
          <View style={styles.Containerheader}>
            <View style={styles.leftHeaderContainer}>
              <CardIcon style={styles.LeftIcons} />

              <View>
                <Text style={[styles.HeaderText, styles.Title]}>
                  {cardTitle || "Sin tarjeta seleccionada"}
                </Text>
                <View style={styles.ContentOptionsList}>
                  <Text style={styles.HeaderText}>En la Lista</Text>
                  <Pressable style={[styles.OptionsList]}>
                    <Text style={styles.HeaderText}>esta lista</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <Pressable onPress={onClose}>
              <Cancelicon style={[styles.LeftIcons, { marginRight: 0 }]} />
            </Pressable>
          </View>

          <View style={styles.ModificationsContent}>
            <View style={styles.DescriptionContent}>
              <View
                style={[
                  { flexDirection: "row", paddingLeft: 32, marginBottom: 16 },
                ]}
              >
                <View>
                  <Text style={[styles.HeaderText, { marginBottom: 5 }]}>
                    Notificaciones
                  </Text>
                  <Pressable style={styles.ContentFollowButtom}>
                    <EyeIcon size={16} style={styles.LeftIcons} />
                    <Text style={styles.HeaderText}> Seguir </Text>
                  </Pressable>
                </View>
              </View>

              <View style={[{ flexDirection: "row", marginBottom: 24,}]}>
                <DescriptionIcon size={22} style={styles.LeftIcons} />
                <View style={[{ flexDirection: "column", rowGap: 12, flex: 1 }]}>
                  <Text style={[styles.HeaderText,{ fontSize: 16, fontWeight: "bold" },]}>
                    Descripcion
                  </Text>
                  <Pressable style={[{ backgroundColor: '#a1bdd914', padding: 8, paddingTop: 12, paddingBottom: 32, borderRadius: 3, flexGrow: 1,}]}>
                    <Text style={[styles.HeaderText]}>
                      Añadir una descripcion mas detallada 
                    </Text>
                  </Pressable>
                </View>
              </View>

              <View style={[{ flexDirection: "row", }]}>
                <DescriptionIcon size={22} style={styles.LeftIcons} />
                <View style={[{ flexDirection: "row", rowGap: 12, flex: 1, justifyContent: 'space-between' }]}>
                  <Text style={[styles.HeaderText,{ fontSize: 16, fontWeight: "bold" },]}>
                    Actividad
                  </Text>
                  <Pressable style={[{ backgroundColor: '#a1bdd914',}]}>
                    <Text style={[styles.HeaderText]}>
                      Ocultar detalles
                    </Text>
                  </Pressable>
                </View>
              </View>

            </View>

            <View style={styles.OptionsButtonsContent}>
              <Pressable style={styles.optionsButtonsRight}>
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}> Unirse </Text>
              </Pressable>
              <Pressable style={styles.optionsButtonsRight}>
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}> Miembros </Text>
              </Pressable>
              <Pressable style={styles.optionsButtonsRight}>
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}> Etiquetas </Text>
              </Pressable>
              <Pressable style={styles.optionsButtonsRight}>
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}> Fechas </Text>
              </Pressable>
              <Pressable style={styles.optionsButtonsRight}>
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}> Checklist </Text>
              </Pressable>
              <Pressable style={styles.optionsButtonsRight}>
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}> Adjunto </Text>
              </Pressable>
              <Pressable style={styles.optionsButtonsRight}>
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}> Portada </Text>
              </Pressable>
              <Pressable style={styles.optionsButtonsRight}>
                <EyeIcon size={16} style={styles.LeftIcons} />
                <Text style={styles.HeaderText}> Campos personalizados </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  ContainerInfoCard: {
    backgroundColor: "#323940",
    width: "60%",
    height: "90%",
    borderRadius: 10,
    padding: 20,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  Containerheader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftHeaderContainer: {
    flexDirection: "row",
  },
  LeftIcons: {
    marginRight: 10,
    color: "#9fadbc",
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  HeaderText: {
    color: "#9fadbc",
  },
  ContentOptionsList: {
    marginTop: 7,
    marginBottom: 25,
    flexDirection: "row", 
    justifyContent: "center", 
    alignItems: "center", 
  },
  OptionsList: {
    backgroundColor: "#A1BDD914",
    paddingHorizontal: 3,
    paddingVertical: 1,
    borderRadius: 4,
    alignItems: "center",
    marginLeft: 5,
  },
  ModificationsContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  DescriptionContent: {
    flexDirection: "column",
    flexBasis: '68%',
  },
  ContentFollowButtom: {
    backgroundColor: "#A1BDD914",
    flexDirection: "row",
    borderRadius: 3,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  OptionsButtonsContent: {
    gap: 8,
  },
  optionsButtonsRight: {
    minWidth: 168,
    maxWidth: 168,
    backgroundColor: "#A1BDD914",
    flexDirection: "row",
    borderRadius: 3,
    padding: 7,
    alignItems: "center",
    alignSelf: "flex-start",
  },
});

export default ModalComponent;
