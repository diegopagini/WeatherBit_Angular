import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  cityName = new FormControl('');
  
  @Output() cityStringEmit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchCity () {
    this.cityStringEmit.emit(this.cityName.value);
  }

}
