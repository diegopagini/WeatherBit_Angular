import { Component, Input, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.scss']
})
export class ViewNewsComponent implements OnInit {

  @Input() currentTemp;

  sourceImage: string;

  constructor() { }

  ngOnInit(): void {
    this.setImage();
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes.currentTemp.currentValue) {
      this.setImage();
    }
  }

  setImage() {
    if (this.currentTemp) {
      if (this.currentTemp > 10 && this.currentTemp < 20) {
        this.sourceImage = '/assets/img/templado.jpg'
      } else if (this.currentTemp <= 10 ){
        this.sourceImage = '/assets/img/frio.jpg'
      } else {
        this.sourceImage = '/assets/img/calor.jpg'
      }
    }
  }


}
