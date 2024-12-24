import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';

interface IconProps {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>; // Permitir estilos en el ícono
}

export const TrelloIcon = ({ size = 24, color = 'black', style }: IconProps) => (
  <Feather name="trello" size={size} color={color} style={style} />
);

export const OptionsIcon = ({ size = 24, color = 'black', style }: IconProps) => (
  <SimpleLineIcons name="options" size={size} color={color} style={style} />
);

export const QuestionIcon = ({ size = 24, color = 'black', style }: IconProps) => (
  <FontAwesome5 name="question-circle" size={size} color={color} style={style} />
);

export const NotificationIcon = ({ size = 24, color = 'black', style }: IconProps) => (
  <Ionicons name="notifications-outline" size={size} color={color} style={style} />
);

export const SearchIcon = ({ size = 20, color = 'black', style }: IconProps) => (
  <AntDesign name="search1" size={size} color={color} style={style} />
);

export const Addicon = ({ size = 20, color = 'black', style }: IconProps) => (
  <FontAwesome6 name="add" size={size} color={color} style={style} />
);

export const Cancelicon = ({ size = 20, color = 'black', style }: IconProps) => (
  <Feather name="x" size={size} color={color} style={style} />
);

export const DescriptionIcon = ({ size = 20, color = 'black', style }: IconProps) => (
  <Entypo name="text" size={size} color={color} style={style} />
);

export const CardIcon = ({ size = 20, color = 'black', style }: IconProps) => (
  <FontAwesome6 name="credit-card-alt" size={size} color={color} style={style} />
);

export const EyeIcon = ({ size = 20, color = 'black', style }: IconProps) => (
  <Feather name="eye" size={size} color={color} style={style} />
);
