import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {AuthService} from "../auth-service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  setRole(role: string) {
    this.authService.setRole(role);
  }
}
