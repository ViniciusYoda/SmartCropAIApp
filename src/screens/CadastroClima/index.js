import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

export default function CadastroClima() {
  const [cep, setCep] = useState('');
  const [precipitacao, setPrecipitacao] = useState('');
  const [dirDoVento, setDirDoVento] = useState('');
  const [velDoVento, setVelDoVento] = useState('');
  const [pressaoAtmosferica, setPressaoAtmosferica] = useState('');

  const handleEnviar = () => {
    // Lógica para enviar as informações do solo
  };

  return (
    <View style={styles.container}>
      <Header title="CADASTRO DO CLIMA" />
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>
          Envie as informações de seu clima, para te auxiliar da melhor maneira.
        </Text>
        <Input
          placeholder="- CEP -"
          onChangeText={(text) => setCep(text)}
        />
        <Input
          placeholder="- Precipitação -"
          onChangeText={(text) => setPrecipitacao(text)}
        />
        <Input
          placeholder="- Direção do Vento -"
          onChangeText={(text) => setDirDoVento(text)}
        />
        <Input
          placeholder="- Velocidade do Vento -"
          onChangeText={(text) => setVelDoVento(text)}
        />
        <Input
          placeholder="- Pressão Atmosférica -"
          onChangeText={(text) => setPressaoAtmosferica(text)}
        />
        <Button title="ENVIAR" onPress={handleEnviar} />
      </View>
    </View>
  );
}
