import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import ApiService from '../Services/ApiService';
import { AppProps, AppState } from '../Utils/StatesProps';
import { styles } from './AppStyles';
import FormButton from './Shared/FormButton/FormButton';
import FormInput from './Shared/FormInput/FormInput';
export default class App extends Component<AppProps, AppState> {

  state: AppState = {
    inputValue: '',
    measurementType: '',
    invalidInputs: false
  }
  apiService: ApiService = new ApiService();

  submit = async () => {
    console.log('Hello button has been pressed');
    await this.validateInputs();
    if (this.state.invalidInputs) { return; };
    // Need to add some error handling into this, i.e. place not found, no data etc.. 
    this.apiService.getCurrentWeather(this.state.inputValue, this.state.measurementType);
    // Now getting the data back, need to render this in a new page with some nice visulisations 
  }
  updateMeasurementType = (typeOfMeasurement: string): void => {
    this.setState(currentState => ({ ...currentState, measurementType: typeOfMeasurement }))
  }
  validateInputs(): void {
    if (this.state.inputValue === '' || this.state.measurementType === '') {
      this.setState(currentState => ({ ...currentState, invalidInputs: true }))
    } else {
      this.setState(currentState => ({ ...currentState, invalidInputs: false }))
    }
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
         <FormButton buttonTitle='Get weather info' onPress={() => this.submit()} />
         {this.state.invalidInputs ? <Text style={styles.errorMessage}>Please enter a valid values</Text> : null }
      </View>
    );
  } 
}