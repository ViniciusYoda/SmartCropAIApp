import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import axios from 'axios';

export default function CadastroSolo() {
  const [texturaSolo, setTexturaSolo] = useState('');
  const [phSolo, setPhSolo] = useState('');
  const [retencaoAgua, setRetencaoAgua] = useState('');
  const [condutEletrica, setCondutEletrica] = useState('');

  function handleEnviar() {
    try {
      const response = axios.post('http://localhost:8080/api/solo', {
        texturaDoSolo: texturaSolo,
        phDoSolo: parseFloat(phSolo),
        retencaoDeAgua: retencaoAgua,
        condutEletrica: condutEletrica,
      });

      if (response.status === 201) {
        Alert.alert('Sucesso', 'Cadastro do solo realizado com sucesso!');
        setTexturaSolo('');
        setPhSolo('');
        setRetencaoAgua('');
        setCondutEletrica('');
      }
    } catch (error) {
      Alert.alert('Erro','Não foi possível cadastrar o solo. Verifique os campos e tente novamente.');
    }
  }

  return (
    <View style={styles.container}>
      <Header title="CADASTRO DO SOLO" />
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>
          Envie as informações de seu solo, para te auxiliar da melhor maneira.
        </Text>
        <Input
          placeholder="- Textura do Solo -"
          value={texturaSolo}
          onChangeText={setTexturaSolo}
        />
        <Input
          placeholder="- PH do Solo -"
          value={phSolo}
          onChangeText={setPhSolo}
        />
        <Input
          placeholder="- Retenção de Água -"
          value={retencaoAgua}
          onChangeText={setRetencaoAgua}
        />
        <Input
          placeholder="- Condutividade Elétrica -"
          value={condutEletrica}
          onChangeText={setCondutEletrica}
        />
        <Button title="ENVIAR" onPress={handleEnviar} />
      </View>
    </View>
  );
}
