import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, KeyboardAvoidingView } from 'react-native';
import theme from '../src/theme'
import Header from '../components/header0'
import EmailInput from '../components/enterEmailContainer'


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behaviour='position'>
        <Header />
        <EmailInput />
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
  }
});
