import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from './inputfield'
import theme from "../src/theme";

const EnterEmail = () => {

  return(
    <View style={styles.container}>
      <Input />
      <Input />
      <Input />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.unit * 3
  }
})

export default EnterEmail
