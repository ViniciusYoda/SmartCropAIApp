import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import soloHumosoSVG from '../../assets/solo_humoso.svg';

export default function Humoso() {
  return (
    <View style={styles.container}>
      <Header title="Humoso" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image source={soloHumosoSVG} style={styles.image} />
        <Text style={styles.text}>
          O solo humoso é também conhecido como solo humífero, pois apresenta quantidade maior do que 70% de húmus em sua
          composição.
        </Text>
        <Text style={styles.description}>
          Ele é bastante fértil, por isso é amplamente utilizado na produção agrícola. Apresenta bom teor de sais minerais,
          bem como condições como ambiente arejado e permeável.
        </Text>
        <Text style={styles.description}>
          Com isso, a água e o ar podem circular entre as partículas, levando nutrição para as plantas que dependem dele.
        </Text>
        <Text style={styles.description}>
          Os solos humíferos, ou humosos, são comumente caracterizados pela terra preta. Essa coloração ocorre por conta
          da grande quantidade de matéria orgânica neles.
        </Text>
        <Text style={styles.description}>
          O húmus presente neles é derivado da decomposição de matéria orgânica, podendo ser encontrados seres
          decompositores (bactérias, fungos e protozoários), bem como minhocas.
        </Text>
        <Text style={styles.subtitle}>Principais características:</Text>
        <Text style={styles.description}>
          - Produção de húmus pelas minhocas;
        </Text>
        <Text style={styles.description}>
          - Produção de húmus pela decomposição de plantas, animais e folhas mortas;
        </Text>
        <Text style={styles.description}>
          - É produzido naturalmente por fungos e bactérias da terra;
        </Text>
        <Text style={styles.description}>
          - Pode ser produzido e manipulado artificialmente pelo homem;
        </Text>
        <Text style={styles.description}>
          - Tem aspecto úmido, arejado e fofo;
        </Text>
        <Text style={styles.description}>
          - É permeável e retém água sem encharcar;
        </Text>
        <Text style={styles.description}>
          - Libera nitrogênio;
        </Text>
        <Text style={styles.description}>
          - Tem alta fertilidade;
        </Text>
        <Text style={styles.description}>
          - Pouco ácido;
        </Text>
        <Text style={styles.description}>
          - Possui cor escura ou preta.
        </Text>
      </ScrollView>
    </View>
  );
};

