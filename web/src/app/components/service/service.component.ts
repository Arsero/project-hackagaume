import { Component, Input, OnInit } from '@angular/core';
import { Service } from 'src/app/service.model';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
})
export class ServiceComponent implements OnInit {
  @Input() service: Service;
  constructor() {}

  ngOnInit(): void {}
}
