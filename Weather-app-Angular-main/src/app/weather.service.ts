import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class WeatherService {

  private API_KEY = 'df6d1a992bb226a9b463f78d2ff0a1c9';
  constructor(
    private http:HttpClient
  ) {}
    getWeather(city:string){
        return this.http.get<object>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.API_KEY}`)
    }

}
