import React, { useState } from 'react';
import { TouchableOpacity, Text, Pressable, StyleSheet, View, Dimensions, Platform } from 'react-native';
import { DescriptionIcon, Cancelicon, CardIcon, EyeIcon } from '../Icons';

export const InfoCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  if (!isVisible) return null; // No renderizar si está oculto

  const { width: screenWidth } = Dimensions.get("window");

  // Determinar el ancho dinámico
  const containerWidth =
    Platform.OS === "web" && screenWidth > 800 ? "60%" : "95%";
  return (
    <View style={styles.backgroundInfoCard}>
      <View style={[styles.ContainerInfoCard, { width: containerWidth }]}>
        <View style={styles.Containerheader}>
          <View style={styles.leftHeaderContainer}>
            <CardIcon style={styles.LeftIcons} />

            <View>
              <Text style={[styles.HeaderText, styles.Title]}>Titulo</Text>
              <View style={styles.ContentOptionsList}>
                <Text style={[styles.HeaderText]}>
                  En la Lista
                  <Pressable style={[styles.OptionsList, { marginLeft: 5 }]}>
                    <Text style={styles.HeaderText}>esta lista</Text>
                  </Pressable>
                </Text>
              </View>
            </View>
          </View>

          <Pressable onPress={() => setIsVisible(false)}>
            <Cancelicon style={[styles.LeftIcons, { marginRight: 0 }]} />
          </Pressable>
        </View>
        <View style={styles.DescriptionContent}>

          <View style={[{ flexDirection: 'row' }]}>
          <CardIcon style={styles.LeftIcons} />
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
        width: '60%',
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
        color: '#9fadbc'
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ContentOptionsList: {
      marginTop: 7,
      marginBottom: 25,
      alignItems: 'center',
    },
    OptionsList: {
      backgroundColor: '#A1BDD914',
      paddingHorizontal: 3,
      paddingVertical: 1,
      borderRadius: 4,
    },
    ContentFollowButtom: {
      backgroundColor: '#A1BDD914',
      flexDirection: 'row',
      borderRadius: 3,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-start'
    },
    HeaderText: {
      color: '#9fadbc',
    },
    DescriptionContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    OptionsButtonsContent: {
      gap: 8,
    },
    optionsButtonsRight: {
      minWidth: 168,
      maxWidth: 168,
      backgroundColor: '#A1BDD914',
      flexDirection: 'row',
      borderRadius: 3,
      padding: 7,
      alignItems: 'center',
      alignSelf: 'flex-start'
    },
});