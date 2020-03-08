import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import theme from '../src/theme'
import { getFontSize } from '../src/utility'


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
    width: '100%',
    height: 45.2,
    padding: getFontSize().buttonPadding,
    backgroundColor: theme.palette.primary.main,
    borderRadius: theme.shape.roundedInputBorderRadius
  },
  text: {
    fontFamily: 'heebo-medium',
    fontSize: getFontSize().button,
    color: theme.palette.primary.light,
    textAlign: 'center',
  //  lineHeight: 41,
    letterSpacing: 0.08,
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})
export default Button
