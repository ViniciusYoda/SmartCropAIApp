import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaSubtropicalSVG from '../../assets/clima_subtropical.svg';

export default function ClimaTropical() {
  return (
    <View style={styles.container}>
      <Header title="Em Clima Subtropical" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaSubtropicalSVG} style={styles.image} />
        <Text style={styles.text}>
          Em regiões de clima subtropical, onde as temperaturas são moderadas e as estações do ano são bem definidas, é
          possível cultivar uma variedade de alimentos. Aqui estão alguns exemplos de alimentos que podem ser plantados
          em regiões de clima subtropical:
        </Text>
        <Text style={styles.description}>
          Frutas de clima temperado: Em regiões subtropicais, é possível cultivar algumas frutas de clima temperado,
          como maçã, pera, ameixa, pêssego, uva, figo e cereja. Essas frutas requerem um período de frio durante o
          inverno, mas ainda podem se adaptar às temperaturas moderadas do clima subtropical.
        </Text>
        <Text style={styles.description}>
          Cítricos: Os cítricos são bem adaptados ao clima subtropical. Laranjas, tangerinas, limões, limas e toranjas
          são exemplos de frutas cítricas que podem ser cultivadas com sucesso nessa região.
        </Text>
        <Text style={styles.description}>
          Hortaliças de folhas verdes: Hortaliças de folhas verdes, como espinafre, alface, rúcula, couve, acelga e
          agrião, podem ser cultivadas em clima subtropical. Essas plantas geralmente se desenvolvem bem em temperaturas
          moderadas.
        </Text>
        <Text style={styles.description}>
          Brassicaceae: Vegetais da família Brassicaceae, como repolho, brócolis, couve-flor, rabanete e nabo, podem ser
          cultivados em climas subtropicais. Eles geralmente preferem temperaturas mais amenas.
        </Text>
        <Text style={styles.description}>
          Legumes e grãos: Feijão, lentilha, ervilha, grão-de-bico e outros legumes e grãos podem ser cultivados em
          regiões subtropicais. Essas plantas são uma fonte importante de proteínas vegetais e se adaptam bem às
          temperaturas moderadas.
        </Text>
        <Text style={styles.description}>
          Raízes e tubérculos: Batata, cenoura, beterraba, mandioquinha, batata-doce e outros tubérculos podem ser
          cultivados em clima subtropical. Eles requerem um período de crescimento mais longo, mas podem ser cultivados
          com sucesso nessa região.
        </Text>
        <Text style={styles.description}>
          Plantas condimentares: Ervas e especiarias como manjericão, salsa, coentro, tomilho, alecrim, orégano e
          hortelã podem ser cultivadas em climas subtropicais. Elas geralmente se adaptam bem a temperaturas moderadas e
          podem ser usadas para temperar alimentos.
        </Text>
      </ScrollView>
    </View>
  );
};

