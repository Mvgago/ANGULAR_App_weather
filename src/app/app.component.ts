import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  weather: any; 

  constructor(private WeatherService: WeatherService){
    
  }

  ngOnInit(): void {
    
  }


  getWeather(cityName: string, countryCode:string){
    this.WeatherService.getWeather(cityName, countryCode)
    .subscribe(
      res=> this.weather=res,
      err => console.log(err)
    )
  }

  submitLocation(cityName: any, countryCode: any) {
    if(cityName.value && countryCode.value) {
      this.getWeather(cityName.value, countryCode.valur);

      cityName.value = '';
      countryCode.value = '';
    }else {
       alert ('Please insert some value')
    }

    
    cityName.focus();
    return false;
  }
  
}
