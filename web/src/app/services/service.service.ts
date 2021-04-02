import { Service } from 'src/app/service.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  services: Service[] = [
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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

  constructor() {}

  getAllServices(): Service[] {
    return this.services;
  }

  getService(id: number): Observable<Service> {
    return of(this.services.find((s) => s.id == id));
  }
}
