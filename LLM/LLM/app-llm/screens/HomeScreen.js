import React from 'react';
import { View, Text, Alert } from 'react-native';
import CustomTextInput from '../components/TextInput';
import { fetchContextualInfo } from '../api/wikiApi';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const handleTextSubmit = async (text) => {
    try {
      const contextualInfo = await fetchContextualInfo(text);

      if (!contextualInfo) {
        Alert.alert('Nenhuma informação encontrada', 'Por favor, tente com outro texto.');
        return;
      }

      navigation.navigate('Result', { contextualInfo });
    } catch (error) {
      Alert.alert('Erro ao buscar contexto', error.message || 'Ocorreu um erro inesperado.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Resumo</Text>
      <CustomTextInput onSubmit={handleTextSubmit} />
    </View>
  );
};

export default HomeScreen;

