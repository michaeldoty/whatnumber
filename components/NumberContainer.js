import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

export const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    padding: 10,
    borderColor: Colors.accent,
    borderWidth: 2,
    borderRadius: 3,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dotted',
    color: Colors.accent,
  },
  number: {
    color: Colors.primary,
    fontSize: 20,
  },
});

export default NumberContainer;
