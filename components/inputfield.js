import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import theme from "../src/theme";
import { getStyling } from '../src/utility'


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
    ...getStyling().textInput
  },
  container: {
    ...getStyling().inputContainer
  }
})

export default Input
