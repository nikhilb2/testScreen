import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import theme from '../src/theme'
import { getFontSize } from '../src/utility'
const { height } = Dimensions.get('window')


const Header = () => {

  return(
    <View>
      <View style={styles.topUnusable}/>
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerItems}>
          <FontAwesome style={styles.icon} name='angle-left' color={theme.palette.topBarButton.light} size={35}/>
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
    height: 31,
  //  paddingTop: getFontSize().headerPaddingTop,
    paddingHorizontal: theme.spacing.unit * 1.3,
    paddingBottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
  //  backgroundColor: 'green'
  },
  topUnusable: {
    width: '100%',
    height: 24.4,
    marginTop:-24.4,
  //  backgroundColor: 'yellow'
  },
  icon: {
  //  marginTop: 3
  marginTop: 'auto',
  marginBottom: 'auto '
  },
  headerItems: {
    display: 'flex',
    flexDirection: 'row',
  },
  backText: {
    color: theme.palette.topBarButton.light,
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * .8,
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
    top: getFontSize().titleCenterTop
  },
  progress: {
    width: '100%',
    height: 2.7,
    backgroundColor: '#007AFF'
  },
  progressBarBack: {
    width: '100%',
    height: 2.7,
    backgroundColor: '#D9D9D9'
  },

})

export default Header
