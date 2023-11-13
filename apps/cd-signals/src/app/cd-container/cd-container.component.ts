import { Component, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'demo-ng-cd-cd-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cd-container.component.html',
  styleUrls: ['./cd-container.component.css'],
})
export class CdContainerComponent implements DoCheck {
  cdCount = 0;

  ngDoCheck(): void {
    this.cdCount++;
  }
}
