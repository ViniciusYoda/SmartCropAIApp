import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import CustomRectangle from '../../components/CustomRectangle';
import styles from './styles';

export default function AlimentoClima({ navigation }) {
  function handleEquatorial() {
    navigation.navigate('ClimaEquatorial');
  }

  function handleTropical() {
    navigation.navigate('ClimaTropical');
  }

  function handleSubtropical() {
    navigation.navigate('ClimaSubtropical');
  }

  function handleTropicalAltitude() {
    navigation.navigate('ClimaTropicalAltitude');
  }

  function handleSemiarido() {
    navigation.navigate('ClimaSemiarido');
  }

  return (
    <View style={styles.container}>
      <Header title="TIPOS DE ALIMENTOS" />
      <View style={styles.rectangleContainer}>
        <TouchableOpacity onPress={handleEquatorial} style={styles.rectangle}>
          <CustomRectangle title="Em Clima Equatorial" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTropical} style={styles.rectangle}>
          <CustomRectangle title="Em Clima Tropical" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSubtropical} style={styles.rectangle}>
          <CustomRectangle title="Em Clima Subtropical" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleTropicalAltitude} style={styles.rectangle}>
          <CustomRectangle title="Em Clima tropical de altitude" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSemiarido} style={styles.rectangle}>
          <CustomRectangle title="Em Clima Semiárido" />
        </TouchableOpacity>
      </View>
    </View>
  );
}