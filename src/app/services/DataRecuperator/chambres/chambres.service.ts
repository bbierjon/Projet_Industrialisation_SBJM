import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export interface Chambre {
  numeroChambre: number;
  numeroService: number;
  numeroEquipement: number;
}
@Injectable({
  providedIn: 'root'
})
export class ChambresService {
  private apiUrl = 'http://localhost:3000/api/services/service';
  constructor(private http: HttpClient) {}


  getChamberByServiceId(serviceId: number): Observable<Chambre[]> {
    console.log("En attente des données provenance de l'api")
    return this.http.get<Chambre[]>(`${this.apiUrl}/${serviceId}`);
  }
}
