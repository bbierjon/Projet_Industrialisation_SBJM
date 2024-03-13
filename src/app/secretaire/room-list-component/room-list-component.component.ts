import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Chambre, ChambresService} from "../../services/DataRecuperator/chambres/chambres.service";
import {MatCardContent, MatCardHeader, MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-room-list-component',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatCardHeader,
    MatCardContent,
  ],
  templateUrl: './room-list-component.component.html',
  styleUrl: './room-list-component.component.css'
})
export class RoomListComponentComponent implements OnInit{
  @Input() serviceId: number | null = null;
  @Output() serviceSelected = new EventEmitter<number>();
  rooms: Chambre[] = [];

  constructor(private chambresService: ChambresService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const serviceId = +params['serviceId']; // The '+' is a quick way to convert the parameter string to a number
      if (serviceId) {
        this.loadRoomsForService(serviceId);
      }
    });
  }

  loadRoomsForService(serviceId: number): void {
    this.chambresService.getChamberByServiceId(serviceId).subscribe(
      data => {
        this.rooms = data;
      },
      error => console.error('Could not load rooms for service', error)
    );
    console.log("Voici ce qui à chargé " + this.rooms)
  }

  onSelectedBed(chambreId: number): void {
    this.router.navigate(['/formulaire-ajout-patient', chambreId]);
  }
}
