import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayContainerComponent } from '../display-container/display-container.component';
import { IncrementorComponent } from '../incrementor/incrementor.component';
import { CdContainerComponent } from '../cd-container/cd-container.component';
import { CountService } from '../shared/count.service';

@Component({
  selector: 'demo-ng-cd-root-container',
  standalone: true,
  imports: [
    CommonModule,
    CdContainerComponent,
    DisplayContainerComponent,
    IncrementorComponent,
  ],
  templateUrl: './root-container.component.html',
  styleUrl: './root-container.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootContainerComponent implements OnDestroy {
  count = 0;

  readonly countService = inject(CountService);

  ngOnDestroy(): void {
    this.countService.count = 0;
  }

  increment(): void {
    this.count++;
  }
}
