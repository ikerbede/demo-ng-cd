import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CdContainerComponent } from '../cd-container/cd-container.component';
import { CountDisplayComponent } from '../count-display/count-display.component';

@Component({
  selector: 'demo-ng-cd-display-container',
  standalone: true,
  imports: [CommonModule, CdContainerComponent, CountDisplayComponent],
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayContainerComponent {}
