import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Header from '../../components/Header';
import CustomRectangle from '../../components/CustomRectangle';
import styles from './styles';

export default function DadosSolo({navigation}) {
  function handleCadastrarSoloPress() {
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
      <Header title="DADOS DO SOLO" />
      <TouchableOpacity onPress={handleCadastrarSoloPress}>
        <CustomRectangle title="Cadastrar Solo" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTiposSoloPress}>
        <CustomRectangle title="Tipos de Solo" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTiposAlimentosPress}>
        <CustomRectangle title="Tipos de Alimentos" />
      </TouchableOpacity>
    </View>
  );
};


