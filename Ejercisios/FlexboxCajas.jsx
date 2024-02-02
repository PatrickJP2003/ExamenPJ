import React from 'react';
import { StyleSheet, View } from 'react-native';

export const FlexboxCajas = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxPurple}></View>
      <View style={styles.boxOrange}></View>
      <View style={styles.boxGreen}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#40EAD8',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  boxPurple: {
    width: 100,
    height: 100,
    backgroundColor: 'purple',
    borderWidth: 10,
    borderColor: 'white',
  },
  boxOrange: {
    marginTop: 100, 
    width: 100,
    height: 100,
    backgroundColor: 'orange',
    borderWidth: 10,
    borderColor: 'white',
  },
  boxGreen: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
  },
});











