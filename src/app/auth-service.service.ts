import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private role: string | undefined;

  constructor() {}

  setRole(role: string) {
    this.role = role;
  }

  getRole(): string {
    return <string>this.role;
  }
}
