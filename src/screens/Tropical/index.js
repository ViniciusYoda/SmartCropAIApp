import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaTropicalSVG from '../../assets/clima_tropical.svg';

export default function Tropical() {
  return (
    <View style={styles.container}>
      <Header title="Tropical" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaTropicalSVG} style={styles.image} />
 <Text style={styles.text}>
          O clima tropical é predominante em várias regiões do Brasil, como nas regiões Centro-Oeste, Norte, Nordeste e
          Sudeste.
        </Text>
        <Text style={styles.subtitle}>Principais características:</Text>
        <Text style={styles.description}>
          Temperaturas elevadas: O clima tropical é caracterizado por temperaturas quentes durante todo o ano. As médias
          mensais geralmente variam entre 25°C e 30°C, podendo chegar a temperaturas ainda mais altas em algumas áreas.
        </Text>
        <Text style={styles.description}>
          Estações distintas: O clima tropical apresenta duas estações bem definidas: uma estação chuvosa e uma estação
          seca. A estação chuvosa ocorre no verão e é caracterizada por chuvas intensas e frequentes. Já a estação seca
          ocorre no inverno e é marcada pela diminuição das chuvas.
        </Text>
        <Text style={styles.description}>
          Chuvas abundantes na estação chuvosa: Durante a estação chuvosa, as precipitações são abundantes, podendo
          ocorrer tempestades tropicais com alto volume de chuva em curtos períodos de tempo. As chuvas contribuem para o
          desenvolvimento de vegetação exuberante e sistemas hídricos importantes, como rios e florestas.
        </Text>
        <Text style={styles.description}>
          Variações regionais: O clima tropical no Brasil pode apresentar variações regionais significativas devido à
          influência de fatores geográficos, como a proximidade do mar, a presença de cadeias de montanhas e a latitude.
          Essas variações podem afetar a quantidade de chuvas e as temperaturas médias.
        </Text>
        <Text style={styles.description}>
          Biodiversidade: O clima tropical favorece a existência de uma rica biodiversidade, com florestas tropicais,
          savanas, cerrados e outros ecossistemas. O Brasil abriga a maior floresta tropical do mundo, a Floresta
          Amazônica, que é um exemplo notável da biodiversidade encontrada nesse tipo de clima.
        </Text>
        <Text style={styles.description}>
          Umidade relativa do ar: A umidade relativa do ar no clima tropical pode variar, mas geralmente é alta. Em
          algumas áreas, a umidade pode chegar a níveis desconfortáveis, especialmente durante a estação chuvosa.
        </Text>
      </ScrollView>
    </View>
  );
};

