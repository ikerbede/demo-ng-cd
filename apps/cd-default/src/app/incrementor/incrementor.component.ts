import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdContainerComponent } from '../cd-container/cd-container.component';
import { CountService } from '../shared/count.service';

@Component({
  selector: 'demo-ng-cd-incrementor',
  standalone: true,
  imports: [CommonModule, CdContainerComponent],
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css'],
})
export class IncrementorComponent {
  private readonly countService = inject(CountService);

  increment(): void {
    this.countService.count++;
  }
}
