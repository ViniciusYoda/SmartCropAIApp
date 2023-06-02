import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaTropicalAltitudeSVG from '../../assets/clima_tropicalAultitude.svg';

export default function ClimaTropicalAltitude() {
  return (
    <View style={styles.container}>
      <Header title="Em Clima Tropical de Altitude" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaTropicalAltitudeSVG} style={styles.image} />
        <Text style={styles.text}>
          Em regiões de clima tropical de altitude, as temperaturas são mais amenas devido à elevação do terreno. Essas
          áreas oferecem condições ideais para o cultivo de uma variedade de alimentos. Aqui estão alguns exemplos de
          alimentos que podem ser plantados em regiões de clima tropical de altitude:
        </Text>
        <Text style={styles.description}>
          Frutas de clima temperado: Em áreas de clima tropical de altitude, é possível cultivar algumas frutas de clima
          temperado, como maçã, pêssego, pera, ameixa e uva. Essas frutas requerem um período de frio durante o inverno,
          que pode ser atingido em altitudes mais elevadas.
        </Text>
        <Text style={styles.description}>
          Cítricos: Os cítricos são bem adaptados a climas tropicais de altitude. Laranjas, tangerinas, limões e limas
          são exemplos de frutas cítricas que podem ser cultivadas nessas regiões.
        </Text>
        <Text style={styles.description}>
          Frutas tropicais: Além das frutas de clima temperado, muitas frutas tropicais também podem ser cultivadas em
          regiões de clima tropical de altitude. Exemplos incluem banana, abacaxi, manga, maracujá, caju, acerola,
          goiaba e mamão.
        </Text>
        <Text style={styles.description}>
          Hortaliças de folhas verdes: Hortaliças de folhas verdes, como alface, espinafre, rúcula, couve e agrião,
          podem ser cultivadas em climas tropicais de altitude. As temperaturas mais amenas proporcionam um ambiente
          favorável para o cultivo dessas plantas.
        </Text>
        <Text style={styles.description}>
          Brassicaceae: Vegetais da família Brassicaceae, como repolho, couve-flor, brócolis e rabanete, podem ser
          cultivados em clima tropical de altitude. Essas plantas se adaptam bem a temperaturas moderadas.
        </Text>
        <Text style={styles.description}>
          Legumes e grãos: Feijão, ervilha, lentilha, grão-de-bico e outros legumes e grãos podem ser cultivados em
          regiões tropicais de altitude. Essas plantas são uma fonte importante de proteínas vegetais e se adaptam bem a
          temperaturas mais amenas.
        </Text>
        <Text style={styles.description}>
          Raízes e tubérculos: Batata, batata-doce, cenoura, beterraba e mandioca podem ser cultivados em clima tropical
          de altitude. Essas culturas se desenvolvem bem em solos mais frios e podem ser adaptadas a altitudes mais
          elevadas.
        </Text>
        <Text style={styles.description}>
          Plantas condimentares: Ervas e especiarias como manjericão, salsa, coentro, tomilho, alecrim, orégano e
          hortelã podem ser cultivadas em climas tropicais de altitude. Elas geralmente se adaptam bem a temperaturas
          moderadas e são usadas para temperar alimentos.
        </Text>
      </ScrollView>
    </View>
  );
};

