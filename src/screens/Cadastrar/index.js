import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView  } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

export default function Cadastrar() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = () => {
    // Lógica para lidar com o cadastro
  };

  return (
    <View style={styles.container}>
      <Header title="CADASTRAR" />
      <View style={styles.center}>
      <Text style={styles.subtitle}>Informe seus dados para complementar o cadastro.</Text>
      <Input
        placeholder="Nome"
        onChangeText={(text) => setNome(text)}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="CPF"
        onChangeText={(text) => setCpf(text)}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        onChangeText={(text) => setSenha(text)}
      />
      </View>
      <Button title="ENVIAR" onPress={handleCadastro} />
    </View>
  );
};
