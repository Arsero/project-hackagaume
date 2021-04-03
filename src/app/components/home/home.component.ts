import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  services: Service[] = [];
  constructor(private serviceService: ServiceService) {
    this.services = this.serviceService.getAllServices();
  }

  ngOnInit(): void {}
}
