import { ChangeDetectorRef, Component} from '@angular/core';
import {  NavigationEnd, Router, RouterModule, RouterOutlet, Event as NavigationEvent } from '@angular/router';
import { HeaderComponent } from "./DefaultComponent/header/header.component";
import { AccueilComponent } from "./mainPage/accueil/accueil.component";
import { FooterComponent } from "./DefaultComponent/footer/footer.component";
import { BreadcrumbComponent } from "./DefaultComponent/breadcrumb/breadcrumb.component";
import { filter } from "rxjs/operators";
import { NgIf}  from "@angular/common";
import { AuthService } from './services/Authentication/auth-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from "./auth.interceptor";
import { ServiceService } from "./services/DataRecuperator/services/service.service";
import { ServicesComponent } from './secretaire/ServiceSection/services.component';
import { MatCardModule } from '@angular/material/card';
import { ChambresService} from "./services/DataRecuperator/chambres/chambres.service";
import {LitsService} from "./services/DataRecuperator/lits/lits.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, AccueilComponent, FooterComponent, BreadcrumbComponent, NgIf, HttpClientModule, ServicesComponent, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthService, ServiceService, ChambresService, LitsService]
})
export class AppComponent {
  title = 'Front-Industrialisation';
  showBreadcrumb: boolean = true;

  constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateBreadcrumbVisibility();
    });
  }

  updateBreadcrumbVisibility() {
    const currentRoute = this.router.url;
    this.showBreadcrumb = currentRoute !== '/' && !currentRoute.startsWith('/accueil');
    this.changeDetectorRef.detectChanges(); // Assurez-vous que les changements sont détectés
  }
}
