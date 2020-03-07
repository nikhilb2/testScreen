import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from './inputfield'
import theme from "../src/theme";
import { getFontSize } from '../src/utility'
import Button from './button'
const EnterEmail = () => {

  return(
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>Who would you like to</Text>
        <Text style={styles.title}>invite first to join your team?</Text>
      </View>
      <Input />
      <Input />
      <Input />
      <Button style={styles.button}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.unit * 3
  },
  title: {
    fontFamily: 'heebo-medium',
    fontSize: getFontSize().title,
    textAlign: 'center',
    marginBottom: -5
  },
  titleHolder: {
    marginTop: theme.spacing.unit * 6.5 ,
    marginBottom: theme.spacing.unit * 5 ,

  },
  button: {
    marginTop: theme.spacing.unit * 3.5
  }
})

export default EnterEmail
