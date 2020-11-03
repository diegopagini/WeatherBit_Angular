import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Console } from 'console';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  cityName = new FormControl('Mar del Plata');

  constructor() { }

  ngOnInit(): void {
  }

  searchCity() {
    console.log('buscando');
  }

}
