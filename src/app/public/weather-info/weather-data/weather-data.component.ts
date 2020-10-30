import { Component, OnInit } from '@angular/core';
import { WeatherbitService } from '../../services/weatherbit.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss'],
})
export class WeatherDataComponent implements OnInit {
  currentTemp: number;
  currentData: any;

  constructor(public weatherbitService: WeatherbitService) {}

  ngOnInit(): void {
    this.weatherbitService.getCurrentWeather().subscribe((res) => {
      this.currentData = res;
    });

    this.getCurrentTemp();
  }

  // tslint:disable-next-line: typedef
  getCurrentTemp() {
    return (this.currentTemp = this.currentData.data.temp);
  }
}
