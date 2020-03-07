import { Dimensions } from 'react-native'
const { height } = Dimensions.get('window')

export const getFontSize = () => {
  console.log(height);
  switch (height) {
    case 667:
      return {
        topBar: 17,
        input: 15.5,
        title: 19
      }
    case 750:
      return {
        topBar: 15,
        input: 13,
        title: 22
      }
    case 896:
      return {
        topBar: 16,
        input: 13,
        title: 19
      }
    case 812:
    return {
      topBar: 15,
      input: 13,
      title: 21
    }
    default:
    return {
      topBar: 15,
      input: 13,
      title: 19
    }
  }
}
