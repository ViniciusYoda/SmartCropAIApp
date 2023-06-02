import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaSemiaridoSVG from '../../assets/clima_semiario.svg';

export default function Semiarido() {
  return (
    <View style={styles.container}>
      <Header title="Semiárido" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaSemiaridoSVG} style={styles.image} />
        <Text style={styles.text}>
          O clima semiárido é predominante na região do sertão nordestino do Brasil, abrangendo estados como Bahia, Piauí,
          Ceará, Rio Grande do Norte e partes de outros estados.
        </Text>
        <Text style={styles.subtitle}>Principais características:</Text>
        <Text style={styles.description}>
          - Chuvas escassas e irregulares: A característica mais marcante do clima semiárido é a ocorrência de chuvas
          escassas e irregulares ao longo do ano. A precipitação anual é geralmente baixa, variando de 300 mm a 800 mm. A
          distribuição das chuvas é irregular, com períodos de seca prolongados e chuvas concentradas em curtos períodos
          de tempo.
        </Text>
        <Text style={styles.description}>
          - Estação seca prolongada: O clima semiárido possui uma estação seca prolongada, que pode durar de cinco a oito
          meses. Durante essa estação, as chuvas são praticamente ausentes, o que leva à aridez do ambiente.
        </Text>
        <Text style={styles.description}>
          - Temperaturas elevadas: O clima semiárido apresenta temperaturas elevadas durante todo o ano. As médias mensais
          podem variar entre 25°C e 35°C, com picos ainda mais altos durante os meses mais quentes.
        </Text>
        <Text style={styles.description}>
          - Baixa umidade relativa do ar: A umidade relativa do ar no clima semiárido é geralmente baixa, frequentemente
          abaixo de 40%. Essa baixa umidade, combinada com as altas temperaturas, contribui para a aridez e para a
          sensação de calor intenso.
        </Text>
        <Text style={styles.description}>
          - Vegetação adaptada à seca: A vegetação do semiárido é adaptada à escassez de água. É comum encontrar espécies de
          plantas resistentes à seca, como cactos, arbustos espinhosos e árvores de caatinga.
        </Text>
        <Text style={styles.description}>
          - Recursos hídricos limitados: A escassez de chuvas e a falta de rios perenes dificultam a disponibilidade de água
          no clima semiárido. Isso pode levar à necessidade de desenvolver estratégias de manejo da água, como a
          construção de açudes e cisternas, para o armazenamento de água durante os períodos de seca.
        </Text>
        <Text style={styles.description}>
          - Agricultura de sequeiro: Devido à escassez de chuvas, a agricultura no clima semiárido geralmente é baseada em
          culturas resistentes à seca, como o milho, feijão, mandioca e plantas forrageiras adaptadas à falta de água.
        </Text>
      </ScrollView>
    </View>
  );
};

