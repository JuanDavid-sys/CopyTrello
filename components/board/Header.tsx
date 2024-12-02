import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Platform, Dimensions } from 'react-native';
import { TrelloIcon, OptionsIcon, QuestionIcon, NotificationIcon, SearchIcon } from '../Icons';

const { width } = Dimensions.get('window');
const isMobile = width < 768;

export const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearchFocus = () => {
    if (isMobile) {
      setIsSearchFocused(true);
    }
  };

  const handleSearchBlur = () => {
    if (isMobile) {
      setIsSearchFocused(false);
    }
  };

  return (
    <View style={styles.container}>
      {!isMobile || !isSearchFocused ? (
        <View style={styles.titleContainer}>
          <TrelloIcon size={24} color="#ffffff" />
          <Text style={styles.title}>Parque Eólico</Text>
        </View>
      ) : null}
      <View style={styles.rightContainer}>
        <View style={[styles.searchContainer, isMobile && styles.searchContainerMobile, isMobile && isSearchFocused && styles.searchContainerExpanded]}>
          <SearchIcon size={15} color="#ffffff" />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar..."
            placeholderTextColor="#999"
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <NotificationIcon size={19} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <QuestionIcon size={19} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <OptionsIcon size={19} color="#ffffff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.initialsButton}>
            <Text style={styles.initialsText}>JD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 16,
    borderWidth: 2,
    borderColor: '#8d8d8d',
  },
  searchContainerMobile: {
    width: 35,
    height: 30,
    borderRadius: 15,
  },
  searchContainerExpanded: {
    width: 70,
  },
  searchInput: {
    fontSize: 16,
    padding: 7,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    marginRight: 10,
    marginBottom: Platform.OS === 'ios' ? 10 : 0,
  },
  initialsButton: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  initialsText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
