import { Component, OnInit } from '@angular/core';

interface HelechoI {
  plantName?: string;
  price?: number;
  pathLink?: string;
  link?: string;
}

@Component({
  selector: 'app-helechos-page',
  templateUrl: './helechos-page.component.html',
  styleUrls: ['./helechos-page.component.scss'],
})
export class HelechosPageComponent implements OnInit {
  helechosArray: Array<HelechoI> = [
    {
      plantName: 'Helecho Plumoso',
      price: 100,
      pathLink: '../../../assets/flowers-imgs/helecho1.png',
      link: 'cart',
    },
    {
      plantName: 'Helecho Colgante',
      price: 150,
      pathLink: '../../../assets/flowers-imgs/helecho2.png',
      link: 'cart',
    },
    {
      plantName: 'Helecho para interiores',
      price: 80,
      pathLink: '../../../assets/flowers-imgs/helecho3.png',
      link: 'cart',
    },
  ];

  storeOnLocal(plant: any, image: any) {
    localStorage.setItem('plant', JSON.stringify(plant));
    localStorage.setItem('plantImg', JSON.stringify(image));
    window.alert('Planta agregada al carrito!');
  }

  constructor() {}

  ngOnInit(): void {}
}
