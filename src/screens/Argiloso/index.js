import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import soloArgilosoSVG from '../../assets/solo_argiloso.svg';

export default function Argiloso() {
  return (
    <View style={styles.container}>
      <Header title="Argiloso" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={soloArgilosoSVG} style={styles.image} />
        <Text style={styles.text}>
          O solo argiloso é um tipo de solo com textura pesada, cuja composição ultrapassa os 30% de argila. Suas
          partículas são bem pequenas e aglomeradas, o que o torna bastante compacto.
        </Text>
        <Text style={styles.text}>
          Eles estão presentes na maior parte do território brasileiro, sendo divididos em argissolo, chernossolo,
          nitossolo e vertissolo.
        </Text>
        <Text style={styles.text}>
          Cada classificação apresenta características específicas que as diferenciam. Os argissolos, por exemplo,
          estão presentes em cerca de 25% do território brasileiro.
        </Text>
        <Text style={styles.subtitle}>Principais características:</Text>
        <Text style={styles.description}>
          - Teor de argila acima de 30%;
        </Text>
        <Text style={styles.description}>
          - São solos com alta profundidade;
        </Text>
        <Text style={styles.description}>
          - Os horizontes do solo A e B apresentam-se difusos;
        </Text>
        <Text style={styles.description}>
          - Elevadas quantidades de óxidos de ferro e alumínio (solos de cor avermelhada, escuros);
        </Text>
        <Text style={styles.description}>
          - Alta capacidade de retenção/absorção de água;
        </Text>
        <Text style={styles.description}>
          - Maior resistência aos processos erosivos;
        </Text>
        <Text style={styles.description}>
          - Alta possibilidade de compactação.
        </Text>
      </ScrollView>
    </View>
  );
};

