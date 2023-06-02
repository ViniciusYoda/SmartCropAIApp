import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import soloArgilosoSVG from '../../assets/solo_argiloso.svg';

export default function SoloArgiloso() {
  return (
    <View style={styles.container}>
      <Header title="Em Solo Argiloso" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={soloArgilosoSVG} style={styles.image} />
        <Text style={styles.text}>
          Por ter alta concentração de nutrientes, o solo argiloso é mais propício para o desenvolvimento de algumas
          plantações. O solo argiloso é ideal para várias culturas da agricultura, como legumes, frutas e grãos.
        </Text>
        <Text style={styles.description}>
          O repolho e o brócolis são exemplos de legumes que prosperam em solo argiloso, pois a terra macia ajuda no
          crescimento das raízes.
        </Text>
        <Text style={styles.description}>
          Além dos legumes, você também pode investir na plantação de grãos no solo argiloso. Exemplo disso é o milho,
          arroz, trigo e aveia, que germinam melhor em solo argiloso do que em outros tipos.
        </Text>
        <Text style={styles.description}>
          Nos solos argilosos, frutas como morangos, cerejas e pêssegos se desenvolvem com mais eficiência.
        </Text>
      </ScrollView>
    </View>
  );
};

