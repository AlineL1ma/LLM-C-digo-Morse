import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/ResultScreenStyles';

const ResultScreen = ({ route }) => {
  const contextualInfo = route.params?.contextualInfo;

  if (!contextualInfo) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>
          Nenhuma informação encontrada. Tente novamente.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Aqui está a sua transcrição:</Text>
      <Text style={styles.content}>{contextualInfo}</Text>
    </ScrollView>
  );
};

export default ResultScreen;
