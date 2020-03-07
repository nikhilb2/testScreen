import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import theme from '../src/theme'
import { getFontSize } from '../src/utility'



const Header = () => {

  return(
    <View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerItems}>
          <Ionicons style={styles.icon} name='ios-arrow-back' color={theme.palette.topBarButton.light} size={30}/>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.titleCenter}>
          <View style={styles.titleHolder}>
            <Text style={styles.title}>Invitations</Text>
          </View>
        </View>
      </View>
      <View style={styles.progressBarBack}>
        <View style={styles.progress} />
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: theme.spacing.unit,
    paddingBottom: theme.spacing.unit / 3,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between'
    //backgroundColor: 'yellow'
  },
  icon: {
    marginTop: 3
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
    ...theme.typography.tobBar,
    fontSize: getFontSize().topBar

  },
  title: {
    fontFamily: 'sfPro-semi',
    fontSize: getFontSize().topBar
  },
  titleHolder: {
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  titleCenter: {
    position: 'absolute',
    width: '100%',
    top: 15
  },
  progress: {
    width: '80%',
    height: 2,
    backgroundColor: '#007AFF'
  },
  progressBarBack: {
    width: '100%',
    height: 2,
    backgroundColor: '#D9D9D9'
  },

})

export default Header
