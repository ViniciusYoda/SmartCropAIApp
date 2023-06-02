import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import CustomRectangle from '../../components/CustomRectangle';
import styles from './styles';

export default function Solos({ navigation }) {
  function handleArenoso() {
    navigation.navigate('Arenoso');
  }

  function handleArgiloso() {
    navigation.navigate('Argiloso');
  }

  function handleHumoso() {
    navigation.navigate('Humoso');
  }

  return (
    <View style={styles.container}>
      <Header title="TIPOS DE SOLOS" />
      <View style={styles.rectangleContainer}>
        <TouchableOpacity onPress={handleArenoso} style={styles.rectangle}>
          <CustomRectangle title="Arenoso" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleArgiloso} style={styles.rectangle}>
          <CustomRectangle title="Argiloso" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHumoso} style={styles.rectangle}>
          <CustomRectangle title="Humoso" />
        </TouchableOpacity>
      </View>
    </View>
  );
}