import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Chambre} from "../chambres/chambres.service";

export interface Lit {
  numeroLit: number;
  estVirtuel: number;
  estReserve: number;
  numeroChambre: number;
  numeroPatient: number;
}
@Injectable({
  providedIn: 'root'
})
export class LitsService {
  private apiUrl = 'http://localhost:3000/api/chambres/lits';
  constructor(private http: HttpClient) {}
  getLitByChambreId(chambreId: number): Observable<Lit[]> {
    console.log("En attente des données provenance de l'api")
    return this.http.get<Lit[]>(`${this.apiUrl}/${chambreId}`);
  }
}
