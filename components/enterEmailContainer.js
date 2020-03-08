import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Input from './inputfield'
import theme from "../src/theme";
import { getStyling } from '../src/utility'
import Button from './button'

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
    fontSize: getStyling().titleHead,
    textAlign: 'center',
    letterSpacing: getStyling().titleLetterSpacing,
    lineHeight: getStyling().titleLineHeigt,
  },
  title2: {
    fontFamily: 'heebo-medium',
    fontSize: getStyling().titleHead,
    textAlign: 'center',
    letterSpacing: getStyling().titleLetterSpacing,
    lineHeight: getStyling().titleLineHeigt,
    marginLeft: 3
  },
  titleHolder: {
    marginTop: getStyling().titleHolderMarginTop ,
    marginLeft: getStyling().titleHolderMarginLeft


  },
  button: {
    marginTop: getStyling().buttonMarginTop
  },
  inputs: {
    ...getStyling().inputs

  }
})

export default EnterEmail
