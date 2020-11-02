import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherbitService {
  key = '9eec655c6fd34430a775dd9fd71dd384';
  baseLink = 'https://api.weatherbit.io/v2.0/current';

  constructor(public http: HttpClient) {}

  // tslint:disable-next-line: typedef
  getCurrentWeather() {
    return this.http.get(`${this.baseLink}?city=Mar del Plata&key=${this.key}`);
  }
}
