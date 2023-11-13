import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDisplayComponent } from '../count-display/count-display.component';

@Component({
  selector: 'demo-ng-cd-display-container',
  standalone: true,
  imports: [CommonModule, CountDisplayComponent],
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.css'],
})
export class DisplayContainerComponent {
  cdCount = 0;
}
