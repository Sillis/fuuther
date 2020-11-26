import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }

  getWeather(location){
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&APPID=IREMOVEDTHEAPIKEYJUSTINCASE&units=metric'
    );
  }

}
