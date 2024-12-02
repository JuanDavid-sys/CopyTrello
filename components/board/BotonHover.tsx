import React, { useState } from 'react';
import { Text, StyleSheet, Pressable, View } from 'react-native';

const HoverButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View style={styles.container}>
      <Pressable
        onHoverIn={() => setIsHovered(true)} // Detecta cuando el mouse está encima
        onHoverOut={() => setIsHovered(false)} // Detecta cuando el mouse sale
        style={[
          styles.button,
          isHovered && styles.buttonHovered, // Cambia el estilo si está en hover
        ]}
      >
        <Text style={styles.buttonText}>Hover Me!</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  buttonHovered: {
    borderColor: '#ffffff',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HoverButton;
