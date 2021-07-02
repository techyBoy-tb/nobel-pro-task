
import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 export const styles = StyleSheet.create({
    input: {
      padding: 10,
      marginTop: 5,
      marginBottom: 10,
      width: windowWidth / 2,
      height: windowHeight / 20,
      fontSize: 16,
      borderRadius: 8,
      borderWidth: 1
    }
  });