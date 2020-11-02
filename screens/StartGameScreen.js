import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';

export const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={styles.screen}>
      <Text>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text style={styles.title}>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
          value="enteredValue"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Reset"
              onPress={() => {}}
              color={Colors.accent}
            />
          </View>
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Confirm"
              onPress={() => {}}
              color={Colors.primary}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: '45%',
    color: 'red',
  },
  input: {
    width: 25,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default StartGameScreen;
