// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth'; // Ajustez l'URL en fonction de votre configuration
  private roleSubject = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {}

  setRole(role: string | null): void {
    this.roleSubject.next(role);
  }


  login(identifiant: string, motDePasse: string): Observable<boolean> {
    console.log("L'indentifiant =  " + identifiant + " Mot de passe = " + motDePasse
    )
    return this.http.post<{ access_token: string }>(`${this.apiUrl}/login`, { identifiant, motDePasse }).pipe(
      map(response => {
        const token = response.access_token;
        if (token) {
          const decodedToken = this.decodeToken(token);
          this.roleSubject.next(decodedToken.role);
          localStorage.setItem('access_token', token);
          return true;
        }
        return false;
      })
    );
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.roleSubject.next(null);
  }

  getRole(): Observable<string | null> {
    return this.roleSubject.asObservable();
  }

  isAuthenticated(): boolean {
    console.log("Est authentifié")
    const token = localStorage.getItem('access_token');
    if (!token) return false;
    const decodedToken = this.decodeToken(token);
    return decodedToken !== null && decodedToken.exp > Date.now() / 1000;
  }

  private decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (error) {
      return null;
    }
  }
}
