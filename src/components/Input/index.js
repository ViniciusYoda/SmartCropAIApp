import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';

export default function Input({ placeholder, secureTextEntry, onChangeText }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};
