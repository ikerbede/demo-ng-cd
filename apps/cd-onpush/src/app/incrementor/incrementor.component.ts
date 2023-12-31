import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { CdContainerComponent } from '../cd-container/cd-container.component';
import { CountService } from '../shared/count.service';

@Component({
  selector: 'demo-ng-cd-incrementor',
  standalone: true,
  imports: [CommonModule, CdContainerComponent],
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncrementorComponent {
  @Output() incremented = new EventEmitter<void>();

  private readonly countService = inject(CountService);

  increment(): void {
    this.incremented.emit();
  }

  incrementSmart(): void {
    this.countService.count++;
  }
}
