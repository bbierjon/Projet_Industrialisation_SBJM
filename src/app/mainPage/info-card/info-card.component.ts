import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.css']
})
export class InfoCardComponent {
  @Input() iconSrc: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;
}
