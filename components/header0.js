import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import theme from '../src/theme'
import { getStyling } from '../src/utility'

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
    ...getStyling().headerContainer
  },
  headerItems: {
    position: 'absolute',
    ...getStyling().headerItems,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    ...getStyling().backIcon
  },
  backText: {
    color: theme.palette.topBarButton.light,
    ...theme.typography.tobBar,
    ...getStyling().backText
  },
  title: {
    ...getStyling().title,
  },
  titleHolder: {
    position: 'absolute',
    ...getStyling().titleHolder,
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
