import React from 'react';
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
}

export const TrelloIcon = ({ size = 24, color = 'black' }: IconProps) => (
  <Feather name="trello" size={size} color={color} />
);

export const OptionsIcon = ({ size = 24, color = 'black' }: IconProps) => (
  <SimpleLineIcons name="options" size={size} color={color} />
);

export const QuestionIcon = ({ size = 24, color = 'black' }: IconProps) => (
  <FontAwesome5 name="question-circle" size={size} color={color} />
);

export const NotificationIcon = ({ size = 24, color = 'black' }: IconProps) => (
  <Ionicons name="notifications-outline" size={size} color={color} />
);

export const SearchIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <AntDesign name="search1" size={size} color={color} />
);

export const Addicon = ({ size = 20, color = 'black' }: IconProps) => (
  <FontAwesome6 name="add" size={size} color={color} />
);

export const Cancelicon = ({ size = 20, color = 'black' }: IconProps) => (
  <Feather name="x" size={size} color={color} />
);

export const DescriptionIcon = ({ size = 20, color = 'black' }: IconProps) => (
  <Entypo name="text" size={size} color={color} />
);