import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  template: `
    <md-sidenav mode="side" position="end" opened="open">
      <ng-content></ng-content>
    </md-sidenav>
  `,
  styles: []
})
export class SidenavComponent {}
