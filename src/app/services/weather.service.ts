import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey = '2ce29679a6d3ab4231d15bffe30e6d5a';
  URI: string = '';

  constructor(private http: HttpClient) { 
      this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
  }

  getWeather(cityName: string, countryCode:string) {
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
  }

}
