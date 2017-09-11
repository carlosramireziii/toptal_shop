import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../auth/models/user';

@Component({
  selector: 'app-toolbar',
  template: `
    <md-toolbar class="mat-typography" color="primary">
      <span>Toptal Shop</span>

      <span class="fill-remaining-space"></span>

      <div class="action-list">
        <button md-icon-button [mdMenuTriggerFor]="appMenu">
          <md-icon>more_vert</md-icon>
        </button>
        <md-menu #appMenu="mdMenu">
          <div *ngIf="!loggedIn">
            <button md-menu-item (click)="onClickLogin()"> Login </button>
          </div>
          <div *ngIf="loggedIn">
            <button md-menu-item (click)="onClickLogout()"> Logout </button>
          </div>
        </md-menu>
      </div>
    </md-toolbar>
  `,
  styles: [
    `.fill-remaining-space { flex: 1 1 auto; }`,
    `.action-list { display: flex; flex-direction: row; align-items: center; }`
  ]
})
export class ToolbarComponent {
  @Input() loggedIn: boolean;

  onClickLogin() {
    this.router.navigate(['auth/login']);
  }

  onClickLogout() {
    console.log("Logout");
  }

  constructor(private router: Router) {}
}
