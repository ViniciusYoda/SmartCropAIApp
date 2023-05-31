import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './styles';

import logoImage from '../../assets/logo.png';


export default function Login({navigation}) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica para lidar com o login
  };
  
  function handleCreateAccount() {
    navigation.navigate('Cadastrar');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logoImage} style={styles.logo} />
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Login"
          onChangeText={(text) => setLogin(text)}
        />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={(text) => setSenha(text)}
        />
      </View>
      <TouchableOpacity style={styles.createAccountText} onPress={handleCreateAccount}>
        <Text>Já possui conta? Criar conta</Text>
      </TouchableOpacity>
    
      <Button title="LOGIN" onPress={handleLogin} />
    </View>
  );
}
