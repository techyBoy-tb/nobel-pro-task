import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    padding: 8
  },
  image: {
    width: 66,
    height: 58,
  },
  heading: {
    fontSize: 24
  },
  weatherInfo: {
    padding: 16
  }
});