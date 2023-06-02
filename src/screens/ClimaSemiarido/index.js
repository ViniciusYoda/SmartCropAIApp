import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaSemiaridoSVG from '../../assets/clima_semiario.svg';

export default function ClimaSemiarido() {
  return (
    <View style={styles.container}>
      <Header title="Em Clima Semiárido" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaSemiaridoSVG} style={styles.image} />
        <Text style={styles.text}>
          O clima semiárido é caracterizado por temperaturas altas e precipitação irregular, apresentando um desafio
          para a agricultura. No entanto, há uma variedade de alimentos que podem ser cultivados em regiões de clima
          semiárido. Aqui estão alguns exemplos de alimentos que se adaptam a esse tipo de clima:
        </Text>
        <Text style={styles.description}>
          Frutas resistentes à seca: Algumas frutas são adaptadas a condições de seca e podem ser cultivadas em regiões
          semiáridas. Exemplos incluem figo, romã, uva, tâmara e cactos frutíferos, como a pitaya.
        </Text>
        <Text style={styles.description}>
          Oleaginosas: Culturas oleaginosas, como amendoim e gergelim, podem ser cultivadas em climas semiáridos. Essas
          plantas têm uma alta tolerância à seca e podem ser uma fonte de óleos vegetais.
        </Text>
        <Text style={styles.description}>
          Cactos e suculentas comestíveis: Alguns cactos e suculentas têm partes comestíveis e são resistentes à seca.
          Exemplos incluem o nopal, que é um tipo de cacto comestível, e a planta do aloe vera, cujas folhas têm
          propriedades medicinais e também podem ser consumidas.
        </Text>
        <Text style={styles.description}>
          Leguminosas resistentes à seca: Algumas leguminosas são adaptadas a climas secos e podem ser cultivadas em
          regiões semiáridas. Exemplos incluem feijão-caupi, feijão-fradinho e lentilha. Essas plantas fixam nitrogênio
          no solo, melhorando a fertilidade para outras culturas.
        </Text>
        <Text style={styles.description}>
          Milho e sorgo: O milho e o sorgo são culturas que podem tolerar condições de seca moderada. Existem variedades
          adaptadas ao clima semiárido que podem ser cultivadas para alimentação humana ou animal.
        </Text>
        <Text style={styles.description}>
          Hortaliças resistentes à seca: Algumas hortaliças têm boa adaptação a climas semiáridos. Exemplos incluem
          abóbora, quiabo, berinjela, pimentão e tomate. Essas plantas podem ser cultivadas com técnicas de manejo da
          água, como irrigação por gotejamento, para reduzir a demanda hídrica.
        </Text>
        <Text style={styles.description}>
          Plantas aromáticas e condimentares: Ervas e especiarias, como alecrim, tomilho, sálvia, coentro e pimenta,
          geralmente têm boa adaptação a climas secos. Elas podem ser cultivadas em hortas domésticas ou em sistemas
          agroflorestais para consumo local ou comercialização.
        </Text>
      </ScrollView>
    </View>
  );
};

