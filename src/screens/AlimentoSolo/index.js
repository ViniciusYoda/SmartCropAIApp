import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import CustomRectangle from '../../components/CustomRectangle';
import styles from './styles';

export default function AlimentoSolo({ navigation }) {
  function handleArenoso() {
    navigation.navigate('SoloArenoso');
  }

  function handleArgiloso() {
    navigation.navigate('SoloArgiloso');
  }

  function handleHumoso() {
    navigation.navigate('SoloHumoso');
  }

  return (
    <View style={styles.container}>
      <Header title="TIPOS DE ALIMENTOS" />
      <View style={styles.rectangleContainer}>
        <TouchableOpacity onPress={handleArenoso} style={styles.rectangle}>
          <CustomRectangle title="Em Solo Arenoso" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleArgiloso} style={styles.rectangle}>
          <CustomRectangle title="Em Solo Argiloso" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHumoso} style={styles.rectangle}>
          <CustomRectangle title="Em Solo Humoso" />
        </TouchableOpacity>
      </View>
    </View>
  );
}