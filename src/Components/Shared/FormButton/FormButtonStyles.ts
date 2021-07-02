import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: windowWidth / 2,
      height: windowHeight / 20,
      backgroundColor: '#6646ee',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8
    },
    buttonText: {
      fontSize: 16,
      color: '#ffffff'
    }
  });