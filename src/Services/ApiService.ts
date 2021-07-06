import axios from "axios";

export default class ApiService {
  baseUrl = 'https://f0djmbd6e9.execute-api.us-east-2.amazonaws.com/default/config-service';
  config;

  getApiConfig = async () => {
    const header = {
      'Access-Control-Allow-Origin': '*'
    }
    axios.get(this.baseUrl, {headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS'
    }}).then((response => {
      this.config = response.data;
    })).catch(err => {
      console.log('this is the errorrr', err);
    })
  }
  getCurrentWeather = async (lat: string, long: string, unitType: string): Promise<any> => {
    await this.getApiConfig();
    const params = new URLSearchParams({
      lat: lat,
      lon: long,
      units: unitType,
      appid: this.config.apiKey
    }).toString();
    const fullUrl = this.config.weatherUrl + `?${params}`;
    
    return axios.get(fullUrl).then(response => {
      return response;
    }).catch(error => {
      console.log('There has been some sort of error in the request', error);
    })
  }
}
