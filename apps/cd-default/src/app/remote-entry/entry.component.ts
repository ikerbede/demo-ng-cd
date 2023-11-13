import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootContainerComponent } from '../root-container/root-container.component';

@Component({
  selector: 'demo-ng-cd-cd-default-entry',
  standalone: true,
  imports: [CommonModule, RootContainerComponent],
  template: `<demo-ng-cd-root-container></demo-ng-cd-root-container>`,
})
export class RemoteEntryComponent {}
