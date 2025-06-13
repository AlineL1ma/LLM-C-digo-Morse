import React, { useState } from 'react';
import { View, TextInput as RNTextInput, Button } from 'react-native';
import styles from '../styles/TextInputStyles';

const CustomTextInput = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handlePress = () => {
    if (text) {
      onSubmit(text); 
      setText(''); 
    }
  };

  return (
    <View style={styles.container}>
      <RNTextInput
        style={styles.input}
        placeholder="Digite o texto aqui"
        value={text} 
        onChangeText={setText} 
      />
      <Button title="Carregar" onPress={handlePress} />
    </View>
  );
};

export default CustomTextInput;
