import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

import logoImage from '../../assets/logo.png';

export default function Login({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    try {
      const response = axios.post('http://localhost:8080/api/login', {
        email: login,
        senha: senha,
      });
      console.log(response);

      if (response.status === 200) {
        Alert.alert('Sucesso', 'Login realizado com sucesso!');
        setLogin('');
        setSenha('');
        navigation.navigate('Servicos');
      }
    } catch (error) {
      Alert.alert(
        'Erro',
        'Não foi possível realizar o login. Verifique suas credenciais e tente novamente.'
      );
    }
  }

  function handleCreateAccount() {
    navigation.navigate('Cadastrar');
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Input placeholder="Email" value={login} onChangeText={setLogin} />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={senha}
          onChangeText={setSenha}
        />
      </View>
      <TouchableOpacity
        style={styles.createAccountText}
        onPress={handleCreateAccount}>
        <Text>Já possui conta? Criar conta</Text>
      </TouchableOpacity>

      <Button title="LOGIN" onPress={handleLogin} />
    </View>
  );
}
