import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/Header';
import styles from './styles';

export default function Servicos({navigation}) {
  function handleDadosSolo() {
    navigation.navigate('DadosSolo')
  };

  function handleDadosClima() {
    navigation.navigate('DadosClima')
  };

  return (
    <View style={styles.container}>
      <Header title="Serviços" />
      <View style={styles.contentContainer}>
        <Text style={styles.greetingText}>Olá Igor!</Text>
        <Text style={styles.serviceText}>
          Qual dos nossos serviços você gostaria de utilizar?
        </Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleDadosSolo}
          >
            <Icon name="leaf" size={80} style={styles.serviceIcon} />
            <Text style={styles.serviceLabel}>Dados do Solo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.serviceButton}
            onPress={handleDadosClima}
          >
            <Icon name="cloud" size={80} style={styles.serviceIcon} />
            <Text style={styles.serviceLabel}>Dados do Clima</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
