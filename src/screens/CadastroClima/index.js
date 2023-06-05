import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import axios from 'axios';

export default function CadastroClima() {
  const [cep, setCep] = useState('');
  const [precipitacao, setPrecipitacao] = useState('');
  const [dirDoVento, setDirDoVento] = useState('');
  const [velDoVento, setVelDoVento] = useState('');
  const [pressaoAtmosferica, setPressaoAtmosferica] = useState('');

  function handleEnviar() {
    try {
      const response = axios.post('http://localhost:8080/api/clima', {
        cep,
        precipitacao,
        dirDoVento,
        velDoVento,
        pressaoAtmosferica,
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Informações do clima enviadas com sucesso!');
        setCep('');
        setPrecipitacao('');
        setDirDoVento('');
        setVelDoVento('');
        setPressaoAtmosferica('');
      }
    } catch (error) {
      Alert.alert('Erro','Não foi possível enviar as informações do clima. Verifique os campos e tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
      <Header title="CADASTRO DO CLIMA" />
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>
          Envie as informações de seu clima, para te auxiliar da melhor maneira.
        </Text>
        <Input placeholder="- CEP -" value={cep} onChangeText={setCep} />
        <Input
          placeholder="- Precipitação -"
          value={precipitacao}
          onChangeText={setPrecipitacao}
        />
        <Input
          placeholder="- Direção do Vento -"
          value={dirDoVento}
          onChangeText={setDirDoVento}
        />
        <Input
          placeholder="- Velocidade do Vento -"
          value={velDoVento}
          onChangeText={setVelDoVento}
        />
        <Input
          placeholder="- Pressão Atmosférica -"
          value={pressaoAtmosferica}
          onChangeText={setPressaoAtmosferica}
        />
        <Button title="ENVIAR" onPress={handleEnviar} />
      </View>
    </View>
  );
}
