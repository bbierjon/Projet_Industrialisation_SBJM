import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServiceService} from "../../services/DataRecuperator/services/service.service";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {BreadcrumbComponent} from "../../DefaultComponent/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    BreadcrumbComponent
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  @Output() serviceSelected = new EventEmitter<number>();
  services: any[] = [];

  constructor(private serviceService: ServiceService, private router: Router) {}

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe({
      next: (data) => {
        this.services = data;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des services', err);
      }
    });
  }

  onSelectService(serviceId: number): void {
    this.router.navigate(['/room-list', serviceId]);
  }
}
