import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const Interface = () => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const [pares, setPares] = useState<number[]>([]);
  const [impares, setImpares] = useState<number[]>([]);

  const clasificarNumeros = () => {
    const numerosPares = numeros.filter((num) => num % 2 === 0);
    const numerosImpares = numeros.filter((num) => num % 2 !== 0);

    setPares(numerosPares);
    setImpares(numerosImpares);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BIENVENIDO</Text>
      <Text style={styles.vectorText}>Vector: {numeros.join(', ')}</Text>

      <Button
        title="CLASIFICAR"
        onPress={clasificarNumeros}
        color="#030637" // Cambia el color de fondo del botón a #030637
      />

      <Text style={styles.resultText}>
        Pares: {pares.map(String).join(', ')}
      </Text>
      <Text style={styles.resultText}>
        Impares: {impares.map(String).join(', ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#030637', 
  },
  vectorText: {
    marginBottom: 20,
    color: '#910A67',
  },
  resultText: {
    marginTop: 10,
    color: '#910A67',
  },
});

export default Interface;










