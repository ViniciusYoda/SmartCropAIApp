import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import soloArenosoSVG from '../../assets/solo_arenoso.svg';

export default function SoloArenoso() {
  return (
    <View style={styles.container}>
      <Header title="Em Solo Arenoso" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={soloArenosoSVG} style={styles.image} />
        <Text style={styles.text}>
          O solo arenoso é caracterizado pela textura arenosa, apresenta baixa fertilidade natural, são mais susceptíveis
          ao processo de erosão e armazenam menos água e nutrientes do que solos argilosos.
        </Text>
        <Text style={styles.description}>
          Na atualidade, terras onde predominam os solos arenosos são responsáveis por uma parte significativa do volume
          de produção de soja, milho, algodão, melão, manga e madeira para celulose, entre muitos outros produtos
          agrícolas.
        </Text>
        <Text style={styles.description}>
          Solos arenosos não são todos iguais. Nos solos arenosos com teores de argila entre 15 a 20% as restrições de
          cultivo são menores. Assim, quando bem manejados pode se fazer o cultivo das mesmas culturas anuais cultivada
          em solos argilosos.
        </Text>
        <Text style={styles.description}>
          As plantas que estão sendo bastante empregadas em solos arenosos são as gramíneas milheto, brachiaria e panicum,
          por conta do grande aporte de palhada e por terem um sistema radicular bem agressivo.
        </Text>
      </ScrollView>
    </View>
  );
};

