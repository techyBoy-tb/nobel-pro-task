import axios from "axios";

export default class ApiService {
  baseUrl = 'https://cors-anywhere.herokuapp.com/https://f0djmbd6e9.execute-api.us-east-2.amazonaws.com/default/config-service';
  config;
  constructor() {
    const header = {
      'Access-Control-Allow-Origin': '*'
    }
    axios.get(this.baseUrl, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
    }}).then((response => {
      this.config = response.data;
    }))
  }

  getCurrentWeather = async (location: string, unitType: string) => {
    const params = new URLSearchParams({
      q: location,
      units: unitType,
      appid: this.config.apiKey
    }).toString();
    const fullUrl = this.config.weatherUrl + `?${params}`
    return axios.get(fullUrl).then(response => {
      console.log('This is the response from the API', response);
    }).catch(error => {
      console.log('There has been some sort of error in the request', error);
    })
  }
}
