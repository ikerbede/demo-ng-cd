import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayContainerComponent } from '../display-container/display-container.component';
import { IncrementorComponent } from '../incrementor/incrementor.component';

@Component({
  selector: 'demo-ng-cd-root-container',
  standalone: true,
  imports: [CommonModule, DisplayContainerComponent, IncrementorComponent],
  templateUrl: './root-container.component.html',
  styleUrls: ['./root-container.component.css'],
})
export class RootContainerComponent {
  cdCount = 0;
}
