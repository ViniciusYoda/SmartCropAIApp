import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import soloHumosoSVG from '../../assets/solo_humoso.svg';

export default function SoloHumoso() {
  return (
    <View style={styles.container}>
      <Header title="Em Solo Humoso" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={soloHumosoSVG} style={styles.image} />
        <Text style={styles.text}>
          Existem muitos alimentos que podem ser cultivados em solo humoso, que é caracterizado por ser rico em matéria
          orgânica e ter uma boa retenção de umidade. Aqui estão alguns exemplos de alimentos que geralmente se
          desenvolvem bem nesse tipo de solo:
        </Text>
        <Text style={styles.description}>
          Vegetais de raiz: Cenoura, beterraba, rabanete, nabo e batata são exemplos de vegetais de raiz que se adaptam
          bem ao solo humoso.
        </Text>
        <Text style={styles.description}>
          Verduras e folhas: Espinafre, alface, rúcula, couve, acelga e almeirão são verduras que se beneficiam de um
          solo rico em matéria orgânica.
        </Text>
        <Text style={styles.description}>
          Legumes: Feijão, ervilha, lentilha e grão-de-bico são legumes que podem ser cultivados em solo humoso.
        </Text>
        <Text style={styles.description}>
          Plantas frutíferas: Morango, framboesa, mirtilo e groselha são algumas frutas que podem se desenvolver bem em
          solo humoso.
        </Text>
        <Text style={styles.description}>
          Ervas: Hortelã, manjericão, salsa, coentro e cebolinha são exemplos de ervas que geralmente crescem bem em solo
          rico em matéria orgânica.
        </Text>
      </ScrollView>
    </View>
  );
};

