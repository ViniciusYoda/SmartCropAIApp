import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import climaSubtropicalSVG from '../../assets/clima_subtropical.svg';

export default function Tropical() {
  return (
    <View style={styles.container}>
      <Header title="Subtropical" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={climaSubtropicalSVG} style={styles.image} />
        <Text style={styles.text}>
          O clima subtropical é predominante na região Sul do Brasil, abrangendo principalmente os estados do Rio Grande
          do Sul, Santa Catarina e Paraná.
        </Text>
        <Text style={styles.subtitle}>Principais características:</Text>
        <Text style={styles.description}>
          Variação sazonal de temperatura: O clima subtropical apresenta uma variação significativa de temperatura ao
          longo do ano. Os verões são quentes, com médias mensais acima de 20°C, enquanto os invernos são mais frios,
          com médias mensais abaixo de 15°C. Geadas são comuns durante o inverno.
        </Text>
        <Text style={styles.description}>
          Estações bem definidas: O clima subtropical possui estações distintas ao longo do ano. Os verões são quentes e
          úmidos, com chuvas frequentes, enquanto os invernos são mais secos. A primavera e o outono são estações de
          transição, apresentando variações nas temperaturas e nas chuvas.
        </Text>
        <Text style={styles.description}>
          Chuvas bem distribuídas: Embora o clima subtropical tenha uma estação seca no inverno, as chuvas ao longo do
          ano são relativamente bem distribuídas. A precipitação ocorre em forma de chuvas regulares e, em algumas
          áreas, podem ocorrer tempestades isoladas no verão.
        </Text>
        <Text style={styles.description}>
          Influência das massas de ar: A região subtropical do Brasil é influenciada pela passagem de massas de ar. No
          verão, massas de ar quentes e úmidas vindas da Amazônia trazem umidade e chuvas. No inverno, massas de ar frias
          vindas do Polo Sul trazem temperaturas mais baixas.
        </Text>
        <Text style={styles.description}>
          Vegetação característica: O clima subtropical favorece o crescimento de uma vegetação diversificada. Na
          região Sul do Brasil, é comum encontrar áreas de campos, florestas de araucária (típicas do planalto) e matas
          de encosta.
        </Text>
        <Text style={styles.description}>
          Eventos climáticos extremos: O clima subtropical pode experimentar eventos climáticos extremos, como fortes
          tempestades, ventos intensos e granizo. Além disso, ocorrências de neve podem ser registradas em áreas de
          maior altitude durante o inverno.
        </Text>
      </ScrollView>
    </View>
  );
};

