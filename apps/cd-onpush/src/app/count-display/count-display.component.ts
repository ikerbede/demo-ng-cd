import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
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
  @Input() count = 0;
  countService = inject(CountService);
}
