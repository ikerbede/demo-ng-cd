import { Component, OnDestroy, inject } from '@angular/core';
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
})
export class RootContainerComponent implements OnDestroy {
  private readonly countService = inject(CountService);

  ngOnDestroy(): void {
    this.countService.count = 0;
  }
}
