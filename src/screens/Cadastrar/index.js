import React, { useState } from 'react';
import { View, Text, Alert  } from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';
import axios from 'axios';

export default function Cadastrar() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleCadastro() {
    try {
      const response = axios.post('http://localhost:8080/api/cadastrar', {
        nome,
        cpf,
        email,
        senha
      });
      console.log(response)

      if (response.status === 201){
        Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
        setNome('')
        setCpf('')
        setEmail('');
        setSenha('')
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível cadastrar o usuário. Verifique os dados e tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="CADASTRAR" />
      <View style={styles.center}>
      <Text style={styles.subtitle}>Informe seus dados para complementar o cadastro.</Text>
      <Input
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.inputSpacing} />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        value={senha}
        onChangeText={setSenha}
      />
      </View>
      <Button title="ENVIAR" onPress={handleCadastro} />
    </View>
  );
};
