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
  plant: any = localStorage.getItem('plant');
  // Get name without double quotes
  plantName = this.plant.replace(/['"]+/g, '');

  constructor() {}

  ngOnInit(): void {}

  deletePlant() {
    localStorage.clear();
    this.plantName = '';
    this.plantPath = '';
  }
}
