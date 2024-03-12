import {Component, OnInit} from '@angular/core';
import {ServiceService} from "../services/service.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor(private serviceService: ServiceService) {}

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
}
