import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')

export const getFontSize = () => {
  console.log(height);
  switch (height) {
    case 667:
      return {
        topBar: 15,
        input: 13,
        title: 19,
        button: 17
      }
    case 750:
      return {
        topBar: 17,
        input: 15.5,
        title: 22,
        button: 19
      }
    case 896:
      return {
        topBar: 16,
        input: 13,
        title: 21,
        button: 18
      }
    case 812:
    return {
      topBar: 15,
      input: 13,
      title: 19,
      button: 17
    }
    default:
    return {
      topBar: 15  * .9,
      input: 13  * .9,
      title: 19  * .9,
      button: 17 * .9
    }
  }
}
