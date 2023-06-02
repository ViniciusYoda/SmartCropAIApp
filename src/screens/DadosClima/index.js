import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import CustomRectangle from '../../components/CustomRectangle';
import styles from './styles';

export default function DadosClima({navigation}) {
  function handleCadastrarSolo() {
    navigation.navigate('CadastroSolo')
  };

  function handleTiposSoloPress() {
    // Lógica para navegar para a tela de Tipos de Solo
  };

  function handleTiposAlimentosPress() {
    // Lógica para navegar para a tela de Tipos de Alimentos
  };

  return (
    <View style={styles.container}>
      <Header title="DADOS DO CLIMA" />
      <TouchableOpacity onPress={handleCadastrarSolo}>
        <CustomRectangle title="Cadastrar Clima" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTiposSoloPress}>
        <CustomRectangle title="Tipos de Clima" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTiposAlimentosPress}>
        <CustomRectangle title="Tipos de Alimentos" />
      </TouchableOpacity>
    </View>
  );
};


