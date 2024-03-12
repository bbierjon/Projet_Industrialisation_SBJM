import { Routes } from '@angular/router';
import { AccueilComponent } from "./mainPage/accueil/accueil.component";
import { ConnexionPageComponent } from "./connexion-page/connexion-page.component";
import {RendezVousComponent} from "./rendez-vous/rendez-vous.component";
import { ServicesComponent } from './ServiceSection/services.component';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }, // Redirige vers 'accueil' par défaut
  { path: 'accueil', component: AccueilComponent, data: { breadcrumb: 'Accueil' } },
  { path: 'connexion-infirmiere', component: ConnexionPageComponent, data: { breadcrumb: 'Accueil > Espace Infirmière' } },
  { path: 'connexion-secretaire', component: ConnexionPageComponent, data: { breadcrumb: 'Accueil > Espace Secrétaire' } },
  { path: 'connexion-patient', component: ConnexionPageComponent, data: { breadcrumb: 'Accueil > Espace Patient' } },
  { path: 'prise-rendezvous', component: RendezVousComponent, data: { breadcrumb: 'Accueil > Espace Patient > Prise de rendez-vous' } },
  { path: 'service', component: ServicesComponent, data: { breadcrumb: 'Accueil > Espace Infirmière > Services' } },
];
