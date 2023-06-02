import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import CustomRectangle from '../../components/CustomRectangle';
import styles from './styles';

export default function AlimentoClima({ navigation }) {
  function handleEquatorial() {
    navigation.navigate('Equatorial');
  }

  function handleTropical() {
    navigation.navigate('Tropical');
  }

  function handleSubtropical() {
    navigation.navigate('Subtropical');
  }

  function handleTropicalAltitude() {
    navigation.navigate('TropicalAltitude');
  }

  function handleSemiarido() {
    navigation.navigate('Semiarido');
  }

  return (
    <View style={styles.container}>
      <Header title="TIPOS DE CLIMA" />
      <View style={styles.rectangleContainer}>
        <TouchableOpacity onPress={handleEquatorial} style={styles.rectangle}>
          <CustomRectangle title="Equatorial" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTropical} style={styles.rectangle}>
          <CustomRectangle title="Tropical" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubtropical} style={styles.rectangle}>
          <CustomRectangle title="Subtropical" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTropicalAltitude} style={styles.rectangle}>
          <CustomRectangle title="Tropical de altitude" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSemiarido} style={styles.rectangle}>
          <CustomRectangle title="Semiárido" />
        </TouchableOpacity>
      </View>
    </View>
  );
}