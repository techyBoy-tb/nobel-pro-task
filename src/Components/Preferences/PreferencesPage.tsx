import * as Location from 'expo-location';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import ApiService from '../../Services/ApiService';
import { PerferencesProps, PerferencesState } from '../../Utils/StatesProps';
import FormButton from '../Shared/FormButton/FormButton';
import { styles } from './PreferencesPageStyles';

export default class PreferencesPage extends Component<PerferencesProps, PerferencesState> {

  state: PerferencesState = {
    inputValue: '',
    measurementType: '',
    invalidInputs: false,
    useLocation: true,
    location: 'YOYOYO'
  }
  apiService: ApiService = new ApiService();

  submit = async () => {
    await this.getLocation();
    if (this.state.measurementType === '') { return; };
    // Need to add some error handling into this, i.e. place not found, no data etc.. 
    this.apiService.getCurrentWeather(this.state.location.coords.latitude, this.state.location.coords.longitude, this.state.measurementType).then(res => {
      const resultsParams = {
        measurement: this.state.measurementType,
        weather: res.data,
        lat: this.state.location.coords.latitude, 
        long: this.state.location.coords.longitude
      }
      this.props.navigation.navigate('ResultsPage', resultsParams);
    });
  }

  getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        this.setState(currentState => ({ ...currentState, useLocation: false }));
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      this.setState(currentState => ({ ...currentState, useLocation: true, location: location }));
  }
  
  updateMeasurementType = (typeOfMeasurement: string): void => {
    this.setState(currentState => ({ ...currentState, measurementType: typeOfMeasurement }))
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.labelTitle}>What unit of measurement would you prefer?</Text>
        <Text style={styles.label}>For temperature in Celsius select 'Metric', for temperature in Fahrenheit select 'Imperial'.</Text>
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
        </View>
         <FormButton buttonTitle='Get weather info' onPress={() => this.submit()} />
         {this.state.invalidInputs ? <Text style={styles.errorMessage}>Please enter a valid values</Text> : null }
      </View>
    );
  } 
}