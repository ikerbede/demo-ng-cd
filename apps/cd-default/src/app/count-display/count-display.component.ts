import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-ng-cd-count-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './count-display.component.html',
  styleUrls: ['./count-display.component.css'],
})
export class CountDisplayComponent {
  cdCount = 0;
  count = 0;
}
