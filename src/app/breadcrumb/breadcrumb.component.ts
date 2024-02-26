import {Component, OnInit} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NgForOf, NgIf} from "@angular/common";
import {Breadcrumb, BreadcrumbService} from "../services/breadcrumb.service";
@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterModule, NgIf, NgForOf,],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: Breadcrumb[] = [];

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit() {
    this.breadcrumbService.breadcrumbs$.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }
}
