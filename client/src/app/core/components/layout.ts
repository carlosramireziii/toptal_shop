import { Component, Input } from '@angular/core';
import { User } from '../../auth/models/user';

@Component({
  selector: 'app-layout',
  template: `
    <app-toolbar [loggedIn]="loggedIn"></app-toolbar>
    <md-sidenav-container>
      <ng-content></ng-content>
    </md-sidenav-container>
  `,
  styles: []
})
export class LayoutComponent {
  @Input() loggedIn: boolean;
}
