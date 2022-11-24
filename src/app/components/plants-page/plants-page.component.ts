import { Component, OnInit } from '@angular/core';

interface productsI {
  name?: string;
  description?: string;
  link?: string;
}

@Component({
  selector: 'app-plants-page',
  templateUrl: './plants-page.component.html',
  styleUrls: ['./plants-page.component.scss'],
})
export class PlantsPageComponent implements OnInit {
  productsList: Array<productsI> = [
    {
      name: 'Flores',
      description: 'Todo tipo de flores',
      link: 'flowers',
    },
    {
      name: 'Arboles',
      description: 'Todo tipo de arboles',
      link: 'trees',
    },
    {
      name: 'Cactus',
      description: 'Los mejores cactus del desierto para tu hogar',
      link: 'cactus',
    },
    {
      name: 'Helechos',
      description: 'Los mejores helechos para tu hogar',
      link: 'helechos',
    },
    {
      name: 'Palmeras',
      description:
        'Descubre los diferentes tipos de palmeras que tenemos para ti!',
      link: 'palms',
    },
    {
      name: 'Pasto',
      description: 'Todo tipo de pasto para tu jardin',
      link: 'grass',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
