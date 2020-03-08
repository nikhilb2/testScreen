import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import theme from "../src/theme";
import { getFontSize } from '../src/utility'

const { height } = Dimensions.get('window')

const Input = () => {

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={'name@example.com'}
        placeholderTextColor='#919191'
       />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40.7 - 0.5,
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: theme.shape.roundedInputBorderRadius / 1.5,
    padding: getFontSize().inputPadding,
    color: '#919191',
    fontFamily: 'heebo-medium',
    fontSize: getFontSize().input,
    letterSpacing: 0.32,
    lineHeight: 19,
    //paddingBottom: theme.spacing.unit



  },
  container: {
    marginBottom: 11.4//theme.spacing.unit * 1.5
  }
})

export default Input
