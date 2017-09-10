import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <app-toolbar></app-toolbar>
    <md-sidenav-container>
      <ng-content></ng-content>
    </md-sidenav-container>
  `,
  styles: []
})
export class LayoutComponent {}
