import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Cadastrar from './screens/Cadastrar';
import Login from './screens/Login';
import Servicos from './screens/Servicos';
import DadosSolo from './screens/DadosSolo';
import CadastroSolo from './screens/CadastroSolo';


export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        
        <Tab.Screen name="Cadastrar" component={Cadastrar} options={{ headerShown: false }} />
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Tab.Screen name="Serviços" component={Servicos} options={{ headerShown: false }} />
        <Tab.Screen name="DadosSolo" component={DadosSolo} options={{ headerShown: false }} />
        <Tab.Screen name="CadastroSolo" component={CadastroSolo} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}