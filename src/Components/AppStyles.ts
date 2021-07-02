import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  input: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  },
  radioLabel: {
    paddingTop: 8
  },
  radioGroup: {
    paddingTop: 16,
    paddingBottom: 16
  },
  label: {
    fontSize: 12,
    color: 'grey',
    // padding: 8
  },
  labelTitle: {
    display: 'flex',
    alignSelf: 'baseline',
    // padding: 8
  }
});
