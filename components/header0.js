import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import theme from '../src/theme'
import { getFontSize } from '../src/utility'
const { height } = Dimensions.get('window')
import BackBtn from '../svg/backbtn'


const Header = () => {

  return(
    <React.Fragment>
      <View style={styles.container}>
        <TouchableOpacity style={styles.headerItems}>
          {/*<FontAwesome style={styles.icon} size={35} name='angle-left' color={theme.palette.topBarButton.light} />*/}
          <Image
            style={styles.icon}
            source={require('../assets/images/backbtn.png')}
          />

          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <View style={styles.titleHolder}>
          <Text style={styles.title}>Invitations</Text>
        </View>

      </View>
      <View style={styles.progressBarBack}>
        <View style={styles.progress} />
      </View>
    </React.Fragment>

  )
}

const styles = StyleSheet.create({
  container: {
    ...getFontSize().headerContainer
  },
  headerItems: {
    position: 'absolute',
    height: 22,
    left: 13.1 - 1,
    bottom: 9.2 - 1.5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
//    backgroundColor: 'red',
    width: 8 + 3,
    height: 16.2 + 3 + 0.5
    //width: 8,
    //height: 16.2
  },
  backText: {
    color: theme.palette.topBarButton.light,
    marginLeft: 8.6 - 1.5,
    ...theme.typography.tobBar,
    fontSize: getFontSize().topBar,
  },
  title: {
    fontFamily: 'sfPro-semi',
    fontSize: getFontSize().topBar,
    letterSpacing: 0.15,
    lineHeight: 18,
    marginLeft: 1,
    marginBottom: .5
  },
  titleHolder: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 11.4 - 1.5,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  progress: {
    width: '77.3%',
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
