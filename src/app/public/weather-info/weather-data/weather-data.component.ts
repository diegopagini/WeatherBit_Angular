import { Component, OnInit } from '@angular/core';
import { WeatherCity, WeatherCurrentResponse } from '../../interfaces/weather-current-response.interface';
import { WeatherbitService } from '../../services/weatherbit.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss'],
})
export class WeatherDataComponent implements OnInit {
  currentTemp: number;

  currentData: WeatherCity;

  constructor(public weatherbitService: WeatherbitService) {}

  ngOnInit(): void {
    this.weatherbitService.getCurrentWeather().subscribe((res: WeatherCurrentResponse) => {
      this.currentData = res.data[0];
      console.log('curenData', this.currentData);

      this.getCurrentTemp();
    });

  }

  // tslint:disable-next-line: typedef
  getCurrentTemp() {
    console.log('currentTemp', this.currentTemp);
    return this.currentTemp = this.currentData.temp;
  }
}
