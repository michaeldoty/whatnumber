import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    marginVertical: 10,
  },
});
export default Input;
