import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { WeatherLine } from '../weather/weatherLine';

@Injectable()
export class WeatherService {
    
    constructor(private http: HttpClient) {}

    getAll() {
        console.log('getAll() called');
        return this.http.get<WeatherLine[]>('/apixu.service')
    }
}