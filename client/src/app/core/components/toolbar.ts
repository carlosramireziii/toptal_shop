import { Component } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  template: `
    <md-toolbar class="mat-typography" color="primary">
      <span>Toptal Shop</span>

      <span class="fill-remaining-space"></span>

      <div class="action-list">
        <button md-icon-button>
          <md-icon>shopping_cart</md-icon>
        </button>
        <button md-icon-button [mdMenuTriggerFor]="appMenu">
          <md-icon>more_vert</md-icon>
        </button>
        <md-menu #appMenu="mdMenu">
          <button md-menu-item> Register </button>
          <button md-menu-item> Login </button>
        </md-menu>
      </div>
    </md-toolbar>
  `,
  styles: [
    `.fill-remaining-space { flex: 1 1 auto; }`,
    `.action-list { display: flex; flex-direction: row; align-items: center; }`
  ]
})
export class ToolbarComponent {}
