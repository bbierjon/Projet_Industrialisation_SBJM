import {ChangeDetectorRef, Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/Authentication/auth-service.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(protected authService: AuthService,private cdr: ChangeDetectorRef,private router: Router) {}

  setRole(role: string) {
    this.authService.setRole(role);
  }

  logout() {
    this.authService.logout();
    this.cdr.detectChanges(); // Force Angular to check for changes
    this.router.navigate(['/accueil']);
  }

}
