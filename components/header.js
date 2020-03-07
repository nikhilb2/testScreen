import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import theme from '../src/theme'

const Header = () => {

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerItems}>
        <Ionicons style={styles.icon} name='ios-arrow-back' color={theme.palette.topBarButton.light} size={30}/>
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>
      <View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: theme.spacing.unit,
    //backgroundColor: 'yellow'
  },
  icon: {
    marginTop:
  },
  headerItems: {
    display: 'flex',
    flexDirection: 'row'
  },
  backText: {
    color: theme.palette.topBarButton.light,
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: theme.spacing.unit,
    ...theme.typography.tobBar

  }
})

export default Header
