import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdContainerComponent } from '../cd-container/cd-container.component';
import { CountService } from '../shared/count.service';

@Component({
  selector: 'demo-ng-cd-count-display',
  standalone: true,
  imports: [CommonModule, CdContainerComponent],
  templateUrl: './count-display.component.html',
  styleUrls: ['./count-display.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountDisplayComponent {
  readonly countService = inject(CountService);
}
