import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../auth-service.service";

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.css'
})
export class ConnexionPageComponent implements OnInit {
  role: string | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.role = this.authService.getRole();
    console.log('Rôle actuel:', this.role);
  }

  onSubmit(): void {
    console.log('Tentative de connexion pour le rôle:', this.role);
  }
}
