import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaTropicalSVG from '../../assets/clima_tropical.svg';

export default function ClimaTropical() {
  return (
    <View style={styles.container}>
      <Header title="Em Clima Tropical" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaTropicalSVG} style={styles.image} />
          <Text style={styles.text}>
          O clima tropical oferece condições propícias para o cultivo de uma ampla variedade de alimentos. Aqui estão
          alguns exemplos de alimentos que podem ser plantados em regiões de clima tropical:
        </Text>
        <Text style={styles.description}>
          Hortaliças de folhas verdes: Hortaliças de folhas verdes, como espinafre, couve, alface, rúcula, agrião e
          bertalha, também podem ser cultivadas em regiões de clima tropical. É importante fornecer sombra parcial para
          proteger essas plantas do sol intenso.
        </Text>
        <Text style={styles.description}>
          Raízes e tubérculos: Alguns exemplos de raízes e tubérculos que podem ser cultivados em clima tropical incluem
          batata-doce, mandioca, inhame, taro, batata-baroa e beterraba. Esses alimentos são ricos em nutrientes e podem
          ser cultivados em solos tropicais.
        </Text>
        <Text style={styles.description}>
          Pimentas e pimentões: Diversas variedades de pimentas e pimentões se adaptam bem ao clima tropical. Exemplos
          incluem pimenta-de-cheiro, pimenta-malagueta, pimenta-biquinho, pimentão verde, vermelho e amarelo. Essas
          plantas geralmente requerem bastante luz solar e solo bem drenado.
        </Text>
        <Text style={styles.description}>
          Feijão e lentilha: O cultivo de feijão e lentilha também é possível em clima tropical. Essas leguminosas são
          fontes importantes de proteínas vegetais e podem ser cultivadas em diferentes variedades, como feijão-preto,
          feijão-carioca, feijão-de-corda e lentilha.
        </Text>
        <Text style={styles.description}>
          Milho: O milho é uma cultura amplamente cultivada em regiões de clima tropical. Existem diversas variedades de
          milho que se adaptam a diferentes condições climáticas, e ele pode ser usado para diversos fins, desde
          alimentação humana até ração animal.
        </Text>
        <Text style={styles.description}>
          Óleos vegetais: Alguns cultivos de plantas oleaginosas também são possíveis em regiões tropicais, como dendê,
          coco e amendoim. Essas plantas são usadas para a produção de óleos vegetais, que têm diversos usos na
          culinária e indústria.
        </Text>
      </ScrollView>
    </View>
  );
};

