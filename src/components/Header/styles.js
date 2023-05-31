import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function Header({ title }){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};




