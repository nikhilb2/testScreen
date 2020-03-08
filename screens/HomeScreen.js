import * as React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, KeyboardAvoidingView, Image, Dimensions } from 'react-native';
import theme from '../src/theme'
import Header from '../components/header0'
import EmailInput from '../components/enterEmailContainer'

const { width, height } = Dimensions.get('window')

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behaviour='position'>
        <Header />
        <EmailInput />
        {/*<Image source={require('../assets/images/design8.png')} style={styles.design8} />*/}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

HomeScreen.navigationOptions = {
  header: null
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.palette.primary.light,
  },
  design8: {
    width: width,
    height: height,
    marginTop: -20,
    position: 'absolute',
    resizeMode: 'stretch',
    opacity: .5,
    left: 10
  }
});
