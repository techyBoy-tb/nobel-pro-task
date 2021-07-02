import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { AppProps, AppState } from '../Utils/StatesProps';
import { styles } from './AppStyles';
import FormButton from './Shared/FormButton/FormButton';
import FormInput from './Shared/FormInput/FormInput';
export default class App extends Component<AppProps, AppState> {
  
  state: AppState = {
    inputValue: "",
    measurementType: "",
    selectedIndex: 2
  }

  onPressLearnMore = (): void => {
    console.log('Hello button has been pressed');
    // This is where I need to navigate to another page and call the Weather API
  }
  updateMeasurementType = (typeOfMeasurement: string): void => {
    this.setState(currentState => ({ ...currentState, measurementType: typeOfMeasurement }))
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelTitle}>What unit of measurement would you prefer?</Text>
        <Text style={styles.label}>For temperature in Celsius select 'Metric', for temperature in Fahrenheit select 'Imperial', for temperature in Kelvin select 'Standard'.</Text>
        <View style={styles.radioGroup}>
          <View style={styles.row}>
            <RadioButton
              value="metric"
              status={this.state.measurementType === 'metric' ? 'checked' : 'unchecked'}
              onPress={(): void => {
                this.updateMeasurementType('metric')
              }}
              />
            <Text style={styles.radioLabel}>Metric</Text>
          </View>
          <View style={styles.row}>
            <RadioButton
              value="imperial"
              status={this.state.measurementType === 'imperial' ? 'checked' : 'unchecked'}
              onPress={(): void => {
                this.updateMeasurementType('imperial')
              }}
            />
            <Text style={styles.radioLabel}>Imperial</Text>
          </View>
          <View style={styles.row}>
            <RadioButton
              value="standard"
              status={this.state.measurementType === 'standard' ? 'checked' : 'unchecked'}
              onPress={(): void => {
                this.updateMeasurementType('standard')
              }}
            />
            <Text style={styles.radioLabel}>Standard</Text>
          </View>
        </View>
        <FormInput
          labelValue="location-input"
          placeholderText='Enter location'
          value={this.state.inputValue}
          onChangeText={(inputText: string) => this.setState({inputValue: inputText})}
          autoCapitalize='none'
          autoCorrect={false}
        />
         <FormButton buttonTitle='Get weather info' onPress={() => this.onPressLearnMore()} />
      </View>
    );
  } 
}