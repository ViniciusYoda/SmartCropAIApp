import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaEquatorialSVG from '../../assets/clima_equatorial.svg';

export default function Equatorial() {
  return (
    <View style={styles.container}>
      <Header title="Equatorial" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaEquatorialSVG} style={styles.image} />
        <Text style={styles.text}>
          O clima equatorial brasileiro é predominante na região amazônica, abrangendo grande parte dos estados
          do Amazonas, Pará, Amapá, Roraima, Acre e parte dos estados de Maranhão, Tocantins, Mato Grosso e Rondônia.
        </Text>
        <Text style={styles.subtitle}>Principais características:</Text>
        <Text style={styles.description}>
          - Temperaturas elevadas: O clima equatorial apresenta temperaturas altas durante todo o ano, com médias
          mensais geralmente acima de 25°C. As variações sazonais são mínimas, e as diferenças diurnas são maiores
          do que as variações anuais.
        </Text>
        <Text style={styles.description}>
          - Chuvas abundantes: Uma das características mais marcantes do clima equatorial é a presença de chuvas
          intensas e abundantes durante todo o ano. Os índices pluviométricos são elevados, com médias anuais
          superiores a 2.000 mm. A precipitação é bem distribuída ao longo do ano, embora haja uma estação de chuvas
          mais intensas.
        </Text>
        <Text style={styles.description}>
          - Alta umidade: A umidade relativa do ar é elevada na região equatorial, geralmente acima de 80%. A combinação
          de altas temperaturas e umidade resulta em um clima quente e úmido.
        </Text>
        <Text style={styles.description}>
          - Vegetação exuberante: As condições climáticas do clima equatorial, com temperaturas elevadas e chuvas
          abundantes, favorecem o desenvolvimento de uma vegetação densa e diversificada. A Floresta Amazônica é um
          exemplo desse tipo de vegetação, caracterizada por sua riqueza em biodiversidade.
        </Text>
        <Text style={styles.description}>
          - Ausência de estações distintas: No clima equatorial, não há estações bem definidas, como verão, outono,
          inverno e primavera. Em vez disso, há uma divisão entre períodos de chuvas intensas e períodos de chuvas
          menos intensas, mas não há uma estação seca bem definida.
        </Text>
      </ScrollView>
    </View>
  );
};

