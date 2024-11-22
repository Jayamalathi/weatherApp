  import { Component } from '@angular/core';
  import { WeatherService } from './weather.service';
  import { Weather } from './weather';
  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent{
    city:string = '';
    setDisplay:boolean = false;

      weath:Weather = {
        temp:0,
        feels:0,
        city:'',
        country:'',
        weather:'',
        desc:'',
        speed:0,
        humidity:0
      }


      constructor(
        private service:WeatherService
      ){}

    displayWeather(){
      this.service.getWeather(this.city).subscribe({
        next:(res:any)=>{
          this.weath.temp = this.converToCelcius(res.main.temp);
          this.weath.feels = this.converToCelcius(res.main.feels_like);
          this.weath.city = res.name;
          this.weath.country = res.sys.country;
          this.weath.weather = res.weather[0].main;
          this.weath.desc = res.weather[0].description;
          this.weath.speed = res.wind.speed;
          this.weath.humidity = res.main.humidity;
          this.setDisplay = true;
          console.log(res);    
        }
      })
    }

    converToCelcius(temp:number){
         temp = temp - 273.15;
         return Math.round(temp)

    }

    setdisplay(){
      this.setDisplay = false
    }
  }
