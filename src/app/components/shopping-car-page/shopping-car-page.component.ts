import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-car-page',
  templateUrl: './shopping-car-page.component.html',
  styleUrls: ['./shopping-car-page.component.scss'],
})
export class ShoppingCarPageComponent implements OnInit {
  // Get url to image from local storage
  plantImg: any = localStorage.getItem('plantImg');
  // quit all double quotes from path
  plantPath = this.plantImg.replace(/['"]+/g, '');
  // Get plant name from local storage
  plantName: any = localStorage.getItem('plant');

  constructor() {}

  ngOnInit(): void {}

  deletePlant() {
    localStorage.removeItem(this.plantName);
    localStorage.removeItem(this.plantImg);
  }
}
