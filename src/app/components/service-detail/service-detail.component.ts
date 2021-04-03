import { ServiceService } from 'src/app/services/service.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/service.model';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss'],
})
export class ServiceDetailComponent implements OnInit {
  service: Service;
  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService
  ) {
    const id = +(this.route.snapshot.paramMap!.get('id') ?? 1);
    this.serviceService
      .getService(id)
      .subscribe((service) => (this.service = service));
  }

  ngOnInit(): void {}
}
