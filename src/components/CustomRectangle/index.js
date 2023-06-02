import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function CustomRectangle({ title }) {
  return (
    <View style={styles.container}>
      <View style={styles.rectangle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};


