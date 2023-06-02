import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import soloArenosoSVG from '../../assets/solo_arenoso.svg';

export default function Arenoso() {
  return (
    <View style={styles.container}>
      <Header title="Arenoso" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={soloArenosoSVG} style={styles.image} />
        <Text style={styles.text}>
          O solo arenoso é um tipo de solo cuja principal característica é o alto teor de areia em sua composição. É um
          solo que apresenta, portanto, uma textura leve.
        </Text>
        <Text style={styles.description}>
          Para ser caracterizado como solo arenoso, ele precisa conter em sua composição pelo menos 70% de areia e nunca
          mais que 15% de argila.
        </Text>
        <Text style={styles.description}>
          Esse tipo de solo é comumente visto na região Nordeste do Brasil, mas também ocorre em menor proporção em outros
          lugares do país.
        </Text>
        <Text style={styles.description}>
          Ele está presente em uma das áreas mais produtivas do Brasil, que é a região chamada de MATOPIBA (Maranhão,
          Tocantins, Piauí e Bahia).
        </Text>
        <Text style={styles.description}>
          O solo arenoso apresenta algumas limitações para o cultivo de certas espécies de plantas, por isso, é necessário
          o manejo adequado, escolhendo as plantas e técnicas corretas.
        </Text>
        <Text style={styles.subtitle}>Principais características:</Text>
        <Text style={styles.description}>
          - Consistência granular arenosa, que pode ser mais grossa ou fina, dependendo do local onde o solo se encontra;
        </Text>
        <Text style={styles.description}>
          - Elevada porosidade e permeabilidade, por conta do arranjo das partículas de areia;
        </Text>
        <Text style={styles.description}>
          - Pouca umidade, já que estes solos não retêm bem a umidade;
        </Text>
        <Text style={styles.description}>
          - Pobreza em nutrientes;
        </Text>
        <Text style={styles.description}>
          - Teor de matéria orgânica normalmente baixo;
        </Text>
        <Text style={styles.description}>
          - PH em estado ácido;
        </Text>
        <Text style={styles.description}>
          - Alto risco de erosão, já que as partículas arenosas são mais facilmente transportadas.
        </Text>
      </ScrollView>
    </View>
  );
};

