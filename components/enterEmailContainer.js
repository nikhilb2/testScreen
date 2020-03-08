import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Input from './inputfield'
import theme from "../src/theme";
import { getFontSize } from '../src/utility'
import Button from './button'

const { height } = Dimensions.get('window')

const EnterEmail = () => {

  return(
    <View style={styles.container}>
      <View style={styles.titleHolder}>
        <Text style={styles.title}>Who would you like to</Text>
        <Text style={styles.title2}>invite first to join your team?</Text>
      </View>
      <View style={styles.inputs}>
        <Input />
        <Input />
        <Input />
        <Button style={styles.button}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.unit * 3.5
  },
  title: {
    fontFamily: 'heebo-medium',
    fontSize: getFontSize().title,
    textAlign: 'center',
    letterSpacing: getFontSize().titleLetterSpacing,
    lineHeight: getFontSize().titleLineHeigt,
  },
  title2: {
    fontFamily: 'heebo-medium',
    fontSize: getFontSize().title,
    textAlign: 'center',
    letterSpacing: getFontSize().titleLetterSpacing,
    lineHeight: getFontSize().titleLineHeigt,
    marginLeft: 3
  },
  titleHolder: {
    marginTop: getFontSize().titleHolderMarginTop ,
    // marginBottom: getFontSize().titleHolderMarginBottom ,
    marginLeft: getFontSize().titleHolderMarginLeft


  },
  button: {
    marginTop: getFontSize().buttonMarginTop
  },
  inputs: {
    marginTop: 47.6 + 1,
    marginRight: -0.9
    //position: 'absolute',
    //top: getFontSize().inputsMarginTop,
    //left: 28,
    //right: 27.1
  }
})

export default EnterEmail
