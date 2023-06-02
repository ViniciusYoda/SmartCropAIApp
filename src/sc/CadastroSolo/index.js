import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

export default function CadastroSolo() {
  const [texturaSolo, setTexturaSolo] = useState('');
  const [phSolo, setPhSolo] = useState('');
  const [retencaoAgua, setRetencaoAgua] = useState('');
  const [condutEletrica, setCondutEletrica] = useState('');

  const handleEnviar = () => {
    // Lógica para enviar as informações do solo
  };

  return (
    <View style={styles.container}>
      <Header title="CADASTRO DO SOLO" />
      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>
          Envie as informações de seu solo, para te auxiliar da melhor maneira.
        </Text>
        <Input
          placeholder="- Textura do Solo -"
          onChangeText={(text) => setTexturaSolo(text)}
        />
        <Input
          placeholder="- PH do Solo -"
          onChangeText={(text) => setPhSolo(text)}
        />
        <Input
          placeholder="- Retenção de Água -"
          onChangeText={(text) => setRetencaoAgua(text)}
        />
        <Input
          placeholder="- Condutividade Elétrica -"
          onChangeText={(text) => setCondutEletrica(text)}
        />
        <Button title="ENVIAR" onPress={handleEnviar} />
      </View>
    </View>
  );
}
