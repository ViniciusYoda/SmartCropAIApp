import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaEquatorialSVG from '../../assets/clima_equatorial.svg';

export default function ClimaEquatorial() {
  return (
    <View style={styles.container}>
      <Header title="Em Clima Equatorial" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaEquatorialSVG} style={styles.image} />
        <Text style={styles.text}>
          O clima equatorial, caracterizado por temperaturas elevadas e chuvas abundantes ao longo do ano,
          oferece condições favoráveis para o cultivo de uma ampla variedade de plantas. Aqui estão algumas
          opções de cultivos adequados ao clima equatorial:
        </Text>
        <Text style={styles.subtitle}>Frutas tropicais:</Text>
        <Text style={styles.description}>
          O clima equatorial é ideal para o cultivo de frutas tropicais, como abacaxi, banana, manga, maracujá,
          caju, acerola, pitanga, jaca e carambola. Essas frutas se adaptam bem às temperaturas quentes e à
          umidade do clima equatorial.
        </Text>
        <Text style={styles.subtitle}>Plantas amazônicas:</Text>
        <Text style={styles.description}>
          Na região amazônica, característica do clima equatorial, é possível cultivar plantas nativas como açaí,
          cupuaçu, pupunha, graviola, castanha-do-brasil e guaraná. Essas plantas se desenvolvem bem em solos
          úmidos e ricos em nutrientes.
        </Text>
        <Text style={styles.subtitle}>Plantas medicinais e aromáticas:</Text>
        <Text style={styles.description}>
          O clima equatorial favorece o cultivo de plantas medicinais e aromáticas, como gengibre, capim-limão,
          erva-cidreira, hortelã, alecrim, camomila e boldo. Essas plantas são conhecidas por suas propriedades
          medicinais e são utilizadas tanto na culinária como na produção de chás e óleos essenciais.
        </Text>
        <Text style={styles.subtitle}>Plantas ornamentais tropicais:</Text>
        <Text style={styles.description}>
          O clima equatorial é propício para o cultivo de plantas ornamentais tropicais, como helicônias, antúrios,
          bastão-do-imperador, bromélias, palmeiras, jasmim-manga, ixoras e costelas-de-adão. Essas plantas exóticas
          são apreciadas pela beleza de suas flores e folhagens.
        </Text>
        <Text style={styles.subtitle}>Hortaliças tropicais:</Text>
        <Text style={styles.description}>
          Algumas hortaliças adaptam-se bem ao clima equatorial, como quiabo, maxixe, abóbora, chuchu, pimenta, jiló
          e taioba. É importante fornecer sombra parcial e garantir um bom manejo de irrigação para o cultivo dessas
          hortaliças.
        </Text>
        <Text style={styles.subtitle}>Café:</Text>
        <Text style={styles.description}>
          O café é uma cultura amplamente cultivada em áreas de clima equatorial, principalmente nas regiões montanhosas.
          Espécies como o café arábica e o café robusta se adaptam bem às temperaturas e às chuvas características do
          clima equatorial.
        </Text>
      </ScrollView>
    </View>
  );
};

