import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaTropicalAltitudeSVG from '../../assets/clima_tropicalAultitude.svg';

export default function TropicalAltitude() {
  return (
    <View style={styles.container}>
      <Header title="Tropical de Altitude" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaTropicalAltitudeSVG} style={styles.image} />
        <Text style={styles.text}>
          O clima tropical de altitude é encontrado em áreas elevadas do Brasil, como a Serra da Mantiqueira, a Serra do
          Mar e outras regiões serranas.
        </Text>
        <Text style={styles.subtitle}>Principais características:</Text>
        <Text style={styles.description}>
          Temperaturas amenas: Uma das características distintivas do clima tropical de altitude é a presença de
          temperaturas mais amenas em comparação com as regiões de clima tropical de baixa altitude. As médias mensais
          podem variar entre 15°C e 25°C, dependendo da altitude e da estação do ano.
        </Text>
        <Text style={styles.description}>
          Variação diurna de temperatura: Devido à altitude, é comum ocorrer uma variação significativa de temperatura
          entre o dia e a noite. Durante o dia, as temperaturas podem ser amenas ou até mesmo quentes, enquanto à noite
          podem cair consideravelmente, resultando em noites mais frescas.
        </Text>
        <Text style={styles.description}>
          Chuvas regulares: O clima tropical de altitude apresenta chuvas regulares ao longo do ano, embora possa haver
          variações sazonais. As precipitações são bem distribuídas, contribuindo para o desenvolvimento de uma
          vegetação exuberante.
        </Text>
        <Text style={styles.description}>
          Neblina e umidade: Devido à altitude e às características topográficas, é comum a presença de neblina nas áreas
          de clima tropical de altitude. A umidade relativa do ar também pode ser elevada, especialmente nas áreas mais
          próximas de rios e florestas.
        </Text>
        <Text style={styles.description}>
          Vegetação diversificada: O clima tropical de altitude favorece a existência de uma vegetação diversificada,
          que pode incluir matas de encosta, campos de altitude e até mesmo trechos de florestas tropicais. A presença
          de diferentes microclimas nas áreas de altitude contribui para a variedade de ecossistemas.
        </Text>
        <Text style={styles.description}>
          Turismo e atividades de lazer: Devido ao clima ameno e às paisagens montanhosas, muitas áreas de clima tropical
          de altitude são procuradas por turistas e oferecem atividades como trilhas, passeios, esportes de aventura e
          turismo rural.
        </Text>
      </ScrollView>
    </View>
  );
};

