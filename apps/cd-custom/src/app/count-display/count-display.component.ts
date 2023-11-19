import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  effect,
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
  count = 0;
  private readonly _cdr = inject(ChangeDetectorRef);
  private readonly _countService = inject(CountService);

  constructor() {
    effect((): void => {
      this.count = this._countService.count();
      this._cdr.detectChanges();
    });
  }
}
