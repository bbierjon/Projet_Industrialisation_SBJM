import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../services/service.service";
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-rendez-vous',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css'] // Correction: styleUrl -> styleUrls
})
export class RendezVousComponent implements OnInit {
  services: any[] = [];
  errorMessage: string | null = null; // Type ajusté pour être plus spécifique et initialisé à null
  isLoading: boolean = true; // Initialisez à true pour indiquer le début du chargement

  constructor(private serviceService: ServiceService) {}

  ngOnInit(): void {
    this.serviceService.getAllServices().subscribe({
      next: (data) => {
        console.log(data)
        this.services = data;
        this.isLoading = false; // Arrête le chargement une fois les données reçues
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des services', err);
        this.errorMessage = 'Une erreur est survenue lors de la récupération des services. Veuillez réessayer plus tard.'; // Met à jour le message d'erreur
        this.isLoading = false; // Arrête également le chargement en cas d'erreur
      }
    });
  }
}
