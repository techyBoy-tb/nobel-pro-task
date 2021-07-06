import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { Component } from "react";
import { Image, Text, View } from 'react-native';
import { ResultsPageProps, ResultsPageState } from "../../Utils/StatesProps";
import { styles } from "./ResultsPageStyles";

export default class ResultsPage extends Component<ResultsPageProps, ResultsPageState> {
  state: ResultsPageState = {
    currentWeather: this.props.route.params.weather.current,
    dailyWeather: this.props.route.params.weather.daily,
    measurement: this.props.route.params.measurement === 'metric' ? 'ºC' : 'ºF',
    dayOne: new Date(this.props.route.params.weather.daily[0].dt * 1000).toDateString(),
    dayTwo: new Date(this.props.route.params.weather.daily[1].dt * 1000).toDateString(),
    dayThree: new Date(this.props.route.params.weather.daily[2].dt * 1000).toDateString(),
  }
  upperFirst = (string) => {
    return string.slice(0, 1).toUpperCase() + string.slice(1, string.length)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.weatherInfo}>
          <Text style={styles.heading}>Today</Text>
          <View style={styles.row}>
            <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/w/${this.state.dailyWeather[0].weather[0].icon}.png` }} />
            <Text style={styles.text}>{this.upperFirst(this.state.dailyWeather[0].weather[0].description)}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name={this.props.route.params.measurement === 'metric' ? 'temperature-celsius' : 'temperature-fahrenheit'} size={36} color="black" />
            <Text style={styles.text}>{this.state.dailyWeather[0].temp.day + this.state.measurement}</Text>
          </View>
        </View>
        <View style={styles.weatherInfo}>
          <Text style={styles.heading}>{this.state.dayTwo}</Text>
          <View style={styles.row}>
            <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/w/${this.state.dailyWeather[1].weather[0].icon}.png` }} />
            <Text style={styles.text}>{this.upperFirst(this.state.dailyWeather[1].weather[0].description)}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name={this.props.route.params.measurement === 'metric' ? 'temperature-celsius' : 'temperature-fahrenheit'} size={36} color="black" />
            <Text style={styles.text}>{this.state.dailyWeather[1].temp.day + this.state.measurement}</Text>
          </View>
        </View>
        <View style={styles.weatherInfo}>
          <Text style={styles.heading}>{this.state.dayThree}</Text>
          <View style={styles.row}>
            <Image style={styles.image} source={{ uri: `http://openweathermap.org/img/w/${this.state.dailyWeather[2].weather[0].icon}.png` }} />
            <Text style={styles.text}>{this.upperFirst(this.state.dailyWeather[2].weather[0].description)}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons name={this.props.route.params.measurement === 'metric' ? 'temperature-celsius' : 'temperature-fahrenheit'} size={36} color="black" />
            <Text style={styles.text}>{this.state.dailyWeather[2].temp.day + this.state.measurement}</Text>
          </View>
        </View>
      </View>
    )
  }
}