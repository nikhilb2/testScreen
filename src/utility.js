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
        titleHolderMarginTop: theme.spacing.unit * 5.5,
        titleHolderMarginBottom: theme.spacing.unit * 4,
        buttonMarginTop: theme.spacing.unit * 3.6,
        inputsMarginTop: theme.spacing.unit * 1.2,
        headerPaddingTop: 0,
        titleCenterTop: 10,
        inputPadding: theme.spacing.unit * 1.2
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
        inputPadding: theme.spacing.unit * 1.2
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
        headerPaddingTop: theme.spacing.unit * 1.5,
        titleCenterTop: 15,
        inputPadding: theme.spacing.unit * 1.5
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
      inputPadding: theme.spacing.unit * 1.2
    }
    default:
    return {
      topBar: 15  * .9,
      input: 13  * .9,
      title: 19  * .9,
      button: 17 * .9,
      buttonPadding: theme.spacing.unit * 1.4,
      titleHolderMarginTop: theme.spacing.unit * 6.5,
      titleHolderMarginBottom: theme.spacing.unit * 5,
      buttonMarginTop: theme.spacing.unit * 3.5,
      inputsMarginTop: 0,
      headerPaddingTop: theme.spacing.unit,
      titleCenterTop: 15,
      inputPadding: theme.spacing.unit * 1.2
    }
  }
}
