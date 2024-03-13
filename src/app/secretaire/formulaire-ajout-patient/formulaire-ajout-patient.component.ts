import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Lit, LitsService} from "../../services/DataRecuperator/lits/lits.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-formulaire-ajout-patient',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formulaire-ajout-patient.component.html',
  styleUrl: './formulaire-ajout-patient.component.css'
})
export class FormulaireAjoutPatientComponent implements OnInit{
  chambreId: number | null = null;
  beds: Lit[] = [];

  constructor(private litsService: LitsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.chambreId = +params['chambreId'];
      if (this.chambreId) {
        this.loadBedsForBedrooms(this.chambreId);
      }
    });
  }

  loadBedsForBedrooms(chambreId: number): void {
    this.litsService.getLitByChambreId(chambreId).subscribe(
      data => {
        this.beds = data;
      },
      error => console.error('Could not load beds for room', error)
    );
  }
}
