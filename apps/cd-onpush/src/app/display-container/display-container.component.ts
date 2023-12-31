import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountDisplayComponent } from '../count-display/count-display.component';
import { CdContainerComponent } from '../cd-container/cd-container.component';

@Component({
  selector: 'demo-ng-cd-display-container',
  standalone: true,
  imports: [CommonModule, CdContainerComponent, CountDisplayComponent],
  templateUrl: './display-container.component.html',
  styleUrls: ['./display-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayContainerComponent {
  @Input() count = 0;
}
