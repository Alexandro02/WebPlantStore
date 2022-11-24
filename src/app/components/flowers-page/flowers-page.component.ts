import { Component, OnInit } from '@angular/core';

interface HelechosI {
  plantName?: string;
  price?: number;
  imgName?: string;
}

@Component({
  selector: 'app-flowers-page',
  templateUrl: './flowers-page.component.html',
  styleUrls: ['./flowers-page.component.scss'],
})
export class FlowersPageComponent implements OnInit {
  helechosArray: Array<HelechosI> = [
    {
      plantName: 'Helecho Plumozo',
      price: 100,
      imgName: '../../../assets/flowers-imgs/helecho1.jpeg',
    },
    {
      plantName: 'Helecho Colgante',
      price: 150,
      imgName: '../../../assets/flowers-imgs/helecho2.jpeg',
    },
    {
      plantName: 'Helecho para interiores',
      price: 80,
      imgName: '../../../assets/flowers-imgs/helecho3.jpeg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
