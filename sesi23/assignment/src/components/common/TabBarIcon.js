import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const TabBarIcon = ({ name, color }) => {
  return <AntDesign name={name} color={color} size={24} />;
};

export default TabBarIcon;
