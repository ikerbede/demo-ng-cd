import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-ng-cd-incrementor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css'],
})
export class IncrementorComponent {
  cdCount = 0;

  increment(): void {
    // TODO: increment value
  }
}
