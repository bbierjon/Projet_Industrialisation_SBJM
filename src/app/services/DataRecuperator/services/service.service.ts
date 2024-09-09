import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Service {
  numeroService: number;
  nomService: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://macadre.fr:4000/api/services'; // Adjust according to your setup

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(this.apiUrl);
  }
}
