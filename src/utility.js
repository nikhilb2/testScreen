import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
import theme from './theme'

export const getStyling = () => {
  console.log(height);
  switch (height) {
    case 667:
      return {
      //  topBar: 15,
        input: 13,
        titleHead: 19,
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
        titleLineHeigt: 22,
        headerContainer: {
          width: '100%',
          height: 37.05,
          position: 'relative'
        },
        headerItems: {
          height: 22,
          left: 12.1,
          bottom: 7.7,
        },
        backIcon: {
          width: 11,
          height: 19.7
        },
        backText: {
          marginLeft: 7.1,
          fontSize: 15
        },
        title: {
          fontSize: 15,
          letterSpacing: 0.15,
          lineHeight: 18,
          marginLeft: 1,
          marginBottom: .5,
          fontFamily: 'sfPro-semi',
        },
        titleHolder: {
          left: 0,
          right: 0,
          bottom: 9.9,
        },
        textInput: {
          letterSpacing: 0.32,
          lineHeight: 19,
          fontSize: 13,
          padding: theme.spacing.unit * 1.2,
          height: 40.2,
          borderColor: '#DBDBDB',
          borderWidth: 1,
          borderRadius: theme.shape.roundedInputBorderRadius / 1.5,
          color: '#919191',
          fontFamily: 'heebo-medium',
        },
        inputContainer: {
          marginBottom: 11.4
        },
        inputs: {
          marginTop: 48.6,
          marginRight: -0.9
        },
        buttonText: {
          letterSpacing: 0.08,
          fontSize: 17,
          fontFamily: 'heebo-medium',
          marginTop: 'auto',
          marginBottom: 'auto',
          textAlign: 'center',
        }
      }
    case 736:
      return {
        topBar: 17,
        input: 15.5,
        titleHead: 22,
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
        titleLineSpacing: 24,
        headerContainer: {
          width: '100%',
          height: 37.05,
          position: 'relative'
        },
        headerItems: {
          height: 22,
          left: 12.1,
          bottom: 7.7,
        },
        backIcon: {
          width: 11,
          height: 19.7
        },
        backText: {
          marginLeft: 7.1,
          fontSize: 17
        },
        title: {
          fontSize: 15,
          letterSpacing: 0.15,
          lineHeight: 18,
          marginLeft: 1,
          marginBottom: .5,
          fontFamily: 'sfPro-semi',
        },
        titleHolder: {
          left: 0,
          right: 0,
          bottom: 9.9,
        },
        textInput: {
          letterSpacing: 0.32,
          lineHeight: 19,
          fontSize: 15.5,
          padding: theme.spacing.unit * 1.2,
          height: 40.2,
          borderColor: '#DBDBDB',
          borderWidth: 1,
          borderRadius: theme.shape.roundedInputBorderRadius / 1.5,
          color: '#919191',
          fontFamily: 'heebo-medium',
        },
        inputContainer: {
          marginBottom: 11.4
        },
        inputs: {
          marginTop: 48.6,
          marginRight: -0.9
        },
        buttonText: {
          letterSpacing: 0.08,
          fontSize: 19,
          fontFamily: 'heebo-medium',
          marginTop: 'auto',
          marginBottom: 'auto',
          textAlign: 'center',
        }
      }
    case 896:
      return {
        topBar: 16,
        input: 13,
        titleHead: 21,
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
        titleLineSpacing: 24,
        headerContainer: {
          width: '100%',
          height: 37.05,
          position: 'relative'
        },
        headerItems: {
          height: 22,
          left: 12.1,
          bottom: 7.7,
        },
        backIcon: {
          width: 11,
          height: 19.7
        },
        backText: {
          marginLeft: 7.1,
          fontSize: 16
        },
        title: {
          fontSize: 15,
          letterSpacing: 0.15,
          lineHeight: 18,
          marginLeft: 1,
          marginBottom: .5,
          fontFamily: 'sfPro-semi',
        },
        titleHolder: {
          left: 0,
          right: 0,
          bottom: 9.9,
        },
        textInput: {
          letterSpacing: 0.32,
          lineHeight: 19,
          fontSize: 13,
          padding: theme.spacing.unit * 1.5,
          height: 40.2,
          borderColor: '#DBDBDB',
          borderWidth: 1,
          borderRadius: theme.shape.roundedInputBorderRadius / 1.5,
          color: '#919191',
          fontFamily: 'heebo-medium',
        },
        inputContainer: {
          marginBottom: 11.4
        },
        inputs: {
          marginTop: 48.6,
          marginRight: -0.9
        },
        buttonText: {
          letterSpacing: 0.08,
          fontSize: 18,
          fontFamily: 'heebo-medium',
          marginTop: 'auto',
          marginBottom: 'auto',
          textAlign: 'center',
        }
      }
    case 812:
    return {
      topBar: 15,
      input: 13,
      titleHead: 19,
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
      titleLineSpacing: 24,
      headerContainer: {
        width: '100%',
        height: 37.05,
        position: 'relative'
      },
      headerItems: {
        height: 22,
        left: 12.1,
        bottom: 7.7,
      },
      backIcon: {
        width: 11,
        height: 19.7
      },
      backText: {
        marginLeft: 7.1,
        fontSize: 15
      },
      title: {
        fontSize: 15,
        letterSpacing: 0.15,
        lineHeight: 18,
        marginLeft: 1,
        marginBottom: .5,
        fontFamily: 'sfPro-semi',
      },
      titleHolder: {
        left: 0,
        right: 0,
        bottom: 9.9,
      },
      textInput: {
        letterSpacing: 0.32,
        lineHeight: 19,
        fontSize: 13,
        padding: theme.spacing.unit * 1.2,
        height: 40.2,
        borderColor: '#DBDBDB',
        borderWidth: 1,
        borderRadius: theme.shape.roundedInputBorderRadius / 1.5,
        color: '#919191',
        fontFamily: 'heebo-medium',
      },
      inputContainer: {
        marginBottom: 11.4
      },
      inputs: {
        marginTop: 48.6,
        marginRight: -0.9
      },
      buttonText: {
        letterSpacing: 0.08,
        fontSize: 17,
        fontFamily: 'heebo-medium',
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
      }
    }
    default:
    return {
      topBar: 15,
      input: 13,
      titleHead: 19,
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
      titleLineSpacing: 24,
      headerContainer: {
        width: '100%',
        height: 37.05,
        position: 'relative'
      },
      headerItems: {
        height: 22,
        left: 12.1,
        bottom: 7.7,
      },
      backIcon: {
        width: 11,
        height: 19.7
      },
      backText: {
        marginLeft: 7.1,
        fontSize: 15
      },
      title: {
        fontSize: 15,
        letterSpacing: 0.15,
        lineHeight: 18,
        marginLeft: 1,
        marginBottom: .5,
        fontFamily: 'sfPro-semi',
      },
      titleHolder: {
        left: 0,
        right: 0,
        bottom: 9.9,
      },
      textInput: {
        letterSpacing: 0.32,
        lineHeight: 19,
        fontSize: 13,
        padding: theme.spacing.unit * 1.2,
        height: 40.2,
        borderColor: '#DBDBDB',
        borderWidth: 1,
        borderRadius: theme.shape.roundedInputBorderRadius / 1.5,
        color: '#919191',
        fontFamily: 'heebo-medium',
      },
      inputContainer: {
        marginBottom: 11.4
      },
      inputs: {
        marginTop: 48.6,
        marginRight: -0.9
      },
      buttonContainer: {
        width: '100%',
        height: 45.2,
      },
      buttonText: {
        letterSpacing: 0.08,
        fontSize: 17,
        fontFamily: 'heebo-medium',
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
      },
    }
  }
}
