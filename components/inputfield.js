import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Dimensions } from "react-native";
import theme from "../src/theme";



const Input = () => {

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={'name@name.com'}
       />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#DBDBDB',
    borderWidth: 1,
    borderRadius: theme.shape.roundedInputBorderRadius /2,
    padding: theme.spacing.unit,
    color: '#919191',
    fontFamily: 'heebo-medium'
  },
  container: {
    padding: theme.spacing.unit
  }
})

export default Input
