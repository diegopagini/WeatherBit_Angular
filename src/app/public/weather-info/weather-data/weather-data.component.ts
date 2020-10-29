import { Component, OnInit } from '@angular/core';
import { WeatherbitService } from '../../services/weatherbit.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.scss']
})
export class WeatherDataComponent implements OnInit {

  currentTemp: number;
  currenData;

  constructor(public weatherbitService: WeatherbitService) { }

  ngOnInit(): void {
    this.weatherbitService.getCurrentWeather().subscribe(res => {
      this.currenData = res;
    });
  }

}
