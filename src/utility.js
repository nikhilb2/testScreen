import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')

export const getFontSize = () => {
  console.log(height);
  switch (height) {
    case 667:
      return {
        topBar: 17,
        input: 15.5
      }
    case 750:
      return {
        topBar: 15,
        input: 13
      }
    case 896:
      return {
        topBar: 16,
        input: 13
      }
    case 812:
    return {
      topBar: 15,
      input: 13
    }
    default:
    return {
      topBar: 15,
      input: 13
    }
  }
}
