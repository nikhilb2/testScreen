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
        placeholder={'name@example.com'}
        placeholderTextColor='#919191'
       />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: theme.shape.roundedInputBorderRadius / 1.5,
    padding: getFontSize().inputPadding,
    color: '#919191',
    fontFamily: 'heebo-medium',
    fontSize: getFontSize().input,

  },
  container: {
    paddingTop: theme.spacing.unit * 1.5
  }
})

export default Input
