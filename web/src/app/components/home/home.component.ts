import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  services: Service[] = [];
  constructor() {
    this.services = [
      {
        id: 1,
        name: 'Titre service',
        description: 'Description service bla bla bla bla bla bla bla',
        image: '',
        owner: {
          id: 1,
          firstname: 'Jean',
          lastname: 'Dupond',
          email: 'JeanDupond@gmail.com',
          phone: '0485624851',
        },
      },
      {
        id: 1,
        name: 'Titre service',
        description: 'Description service',
        image: '',
        owner: {
          id: 1,
          firstname: 'Jean',
          lastname: 'Dupond',
          email: 'JeanDupond@gmail.com',
          phone: '0485624851',
        },
      },
      {
        id: 1,
        name: 'Titre service',
        description: 'Description service',
        image: '',
        owner: {
          id: 1,
          firstname: 'Jean',
          lastname: 'Dupond',
          email: 'JeanDupond@gmail.com',
          phone: '0485624851',
        },
      },
      {
        id: 1,
        name: 'Titre service',
        description: 'Description service',
        image: '',
        owner: {
          id: 1,
          firstname: 'Jean',
          lastname: 'Dupond',
          email: 'JeanDupond@gmail.com',
          phone: '0485624851',
        },
      },
      {
        id: 1,
        name: 'Titre service',
        description: 'Description service',
        image: '',
        owner: {
          id: 1,
          firstname: 'Jean',
          lastname: 'Dupond',
          email: 'JeanDupond@gmail.com',
          phone: '0485624851',
        },
      },
      {
        id: 1,
        name: 'Titre service',
        description: 'Description service',
        image: '',
        owner: {
          id: 1,
          firstname: 'Jean',
          lastname: 'Dupond',
          email: 'JeanDupond@gmail.com',
          phone: '0485624851',
        },
      },
    ];
  }

  ngOnInit(): void {}
}
