import {ChangeDetectorRef, Component} from '@angular/core';
import {  NavigationEnd, Router, RouterModule, RouterOutlet, Event as NavigationEvent } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { AccueilComponent } from "./mainPage/accueil/accueil.component";
import { FooterComponent } from "./footer/footer.component";
import { BreadcrumbComponent } from "./breadcrumb/breadcrumb.component";
import {filter} from "rxjs/operators";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, HeaderComponent, AccueilComponent, FooterComponent, BreadcrumbComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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
