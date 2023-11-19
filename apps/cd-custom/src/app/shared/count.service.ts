import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CountService {
  count = signal(0);

  increment(): void {
    this.count.update((value) => value + 1);
  }

  reset(): void {
    this.count.set(0);
  }
}
