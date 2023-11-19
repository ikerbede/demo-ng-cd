import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContainerComponent } from '../root-container/root-container.component';

@Component({
  standalone: true,
  imports: [CommonModule, RootContainerComponent],
  selector: 'demo-ng-cd-cd-custom-entry',
  template: `<demo-ng-cd-root-container></demo-ng-cd-root-container>`,
})
export class RemoteEntryComponent {}
