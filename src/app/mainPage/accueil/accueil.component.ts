import { Component } from '@angular/core';
import {WelcomeSectionComponent} from "../welcome-section/welcome-section.component";
import {InfoCardComponent} from "../info-card/info-card.component";
import {SupportSectionComponent} from "../support-section/support-section.component";
import {ServiceSectionComponent} from "../service-section/service-section.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    WelcomeSectionComponent,
    InfoCardComponent,
    SupportSectionComponent,
    ServiceSectionComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
