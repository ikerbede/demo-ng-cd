import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  NgZone,
  ViewChild,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { CdContainerComponent } from '../cd-container/cd-container.component';
import { CountService } from '../shared/count.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'demo-ng-cd-incrementor',
  standalone: true,
  imports: [CommonModule, CdContainerComponent],
  templateUrl: './incrementor.component.html',
  styleUrls: ['./incrementor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncrementorComponent implements AfterViewInit {
  @ViewChild('incrementButton') button!: ElementRef<HTMLButtonElement>;
  private readonly _countService = inject(CountService);
  private readonly _ngZone = inject(NgZone);
  private readonly _destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    this._ngZone.runOutsideAngular(() =>
      fromEvent(this.button.nativeElement, 'click')
        .pipe(takeUntilDestroyed(this._destroyRef))
        .subscribe(() => this._countService.increment())
    );
  }
}
