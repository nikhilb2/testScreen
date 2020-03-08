import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
import theme from './theme'

export const getFontSize = () => {
  console.log(height);
  switch (height) {
    case 667:
      return {
        topBar: 15,
        input: 13,
        title: 19,
        button: 17,
        buttonPadding: theme.spacing.unit * 1.2,
        titleHolderMarginTop: theme.spacing.unit * 6 + 2,
        titleHolderMarginBottom: theme.spacing.unit * 3.5,
        buttonMarginTop: 28.9 - 11.4,
        inputsMarginTop: 144.1 + 1.5, //theme.spacing.unit * 1.2,
        headerPaddingTop: 0,
        titleCenterTop: 10,
        inputPadding: 9, //theme.spacing.unit * 1.2,
        titleHolderMarginLeft: -2,
        titleLetterSpacing: 0.38,
        titleLineHeigt: 22
      }
    case 736:
      return {
        topBar: 17,
        input: 15.5,
        title: 22,
        button: 19,
        buttonPadding: theme.spacing.unit * 1.4,
        titleHolderMarginTop: theme.spacing.unit * 6.5,
        titleHolderMarginBottom: theme.spacing.unit * 5,
        buttonMarginTop: theme.spacing.unit * 4,
        inputsMarginTop: 0,
        headerPaddingTop: theme.spacing.unit,
        titleCenterTop: 15,
        inputPadding: theme.spacing.unit * 1.2,
        titleHolderMarginLeft: -2,
        titleLetterSpacing: 0.42,
        titleLineSpacing: 24
      }
    case 896:
      return {
        topBar: 16,
        input: 13,
        title: 21,
        button: 18,
        buttonPadding: theme.spacing.unit * 1.4,
        titleHolderMarginTop: theme.spacing.unit * 6.5,
        titleHolderMarginBottom: theme.spacing.unit * 6.5,
        buttonMarginTop: theme.spacing.unit * 4,
        inputsMarginTop: 0,
        headerPaddingTop: theme.spacing.unit * 1.7,
        titleCenterTop: 10,
        inputPadding: theme.spacing.unit * 1.5,
        titleHolderMarginLeft: -2,
        titleLetterSpacing: 0.42,
        titleLineSpacing: 24
      }
    case 812:
    return {
      topBar: 15,
      input: 13,
      title: 19,
      button: 17,
      buttonPadding: theme.spacing.unit * 1.4,
      titleHolderMarginTop: theme.spacing.unit * 6.5,
      titleHolderMarginBottom: theme.spacing.unit * 5,
      buttonMarginTop: theme.spacing.unit * 3.5,
      inputsMarginTop: 0,
      headerPaddingTop: theme.spacing.unit,
      titleCenterTop: 15,
      inputPadding: theme.spacing.unit * 1.2,
      titleHolderMarginLeft: -2,
      titleLetterSpacing: 0.42,
      titleLineSpacing: 24
    }
    default:
    return {
      topBar: 15,
      input: 13,
      title: 19,
      button: 17,
      buttonPadding: theme.spacing.unit * 1.4,
      titleHolderMarginTop: theme.spacing.unit * 6.5,
      titleHolderMarginBottom: theme.spacing.unit * 5,
      buttonMarginTop: theme.spacing.unit * 3.5,
      inputsMarginTop: 0,
      headerPaddingTop: theme.spacing.unit,
      titleCenterTop: 15,
      inputPadding: theme.spacing.unit * 1.2,
      titleHolderMarginLeft: -2,
      titleLetterSpacing: 0.42,
      titleLineSpacing: 24
    }
  }
}
