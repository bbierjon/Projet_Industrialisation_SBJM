import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "../services/Authentication/auth-service.service";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion-page',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './connexion-page.component.html',
  styleUrl: './connexion-page.component.css'
})
export class ConnexionPageComponent implements OnInit {
  role: string | null | undefined;
  connexionForm: FormGroup;
  private errorMessage: string | undefined;

  constructor(private authService: AuthService, private router: Router) {
    this.connexionForm = new FormGroup({
      identifiant: new FormControl('', Validators.required),
      motDePasse: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.authService.getRole().subscribe((role) => {
      this.role = role;
      console.log('Rôle actuel:', this.role);
    });
  }

  onSubmit(): void {
    if (this.connexionForm.valid) {
      const identifiant = this.connexionForm.get('identifiant')?.value;
      const motDePasse = this.connexionForm.get('motDePasse')?.value;

      if (identifiant !== null && motDePasse !== null) {
        this.authService.login(identifiant, motDePasse).subscribe(
          (success) => {
            if (success) {
              // Rediriger vers la page appropriée en fonction du rôle
              this.authService.getRole().subscribe((role) => {
                if (role === 'infirmiere') {
                  this.router.navigate(['/calendrier']);
                } else if (role === 'secretaire') {
                  this.router.navigate(['/service']);
                } else if (role === 'patient') {
                  this.router.navigate(['/prise-rendezvous']);
                }else
                {
                  this.router.navigate(['/secretaire']);
                }
              });
            } else {
              this.errorMessage = "Échec de la connexion. Veuillez vérifier vos informations d'identification.";
            }
          },
          (error) => {
            console.error(error);
            this.errorMessage = "Échec de la connexion. Veuillez réessayer plus tard.";
          }
        );
      }
    }
  }
}
