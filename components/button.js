import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import theme from '../src/theme'
import { getStyling } from '../src/utility'


const Button = (props) => {
  const { style } = props
  return(
    <TouchableOpacity style={{...styles.container, ...style}}>
      <Text style={styles.text}>Send invitations</Text>
    </TouchableOpacity>
  )
}


const styles =  StyleSheet.create({
  container: {
    ...getStyling().buttonContainer,
    padding: getStyling().buttonPadding,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.roundedInputBorderRadius
  },
  text: {
    color: theme.palette.primary.light,
    ...getStyling().buttonText,

  }
})
export default Button
