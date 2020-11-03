<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Console } from 'console';
=======
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
>>>>>>> 170dcbdbd1dbb8b2825904aaa63e901e1492dac8

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

<<<<<<< HEAD
  cityName = new FormControl('Mar del Plata');
=======
  cityName = new FormControl('');
  
  @Output() cityStringEmit = new EventEmitter();
>>>>>>> 170dcbdbd1dbb8b2825904aaa63e901e1492dac8

  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
  searchCity() {
    console.log('buscando');
=======
  searchCity () {
    this.cityStringEmit.emit(this.cityName.value);
>>>>>>> 170dcbdbd1dbb8b2825904aaa63e901e1492dac8
  }

}
