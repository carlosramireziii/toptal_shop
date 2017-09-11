import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromAuth from '../../auth/reducers';

import { User } from '../../auth/models/user';

@Component({
  selector: 'app-root',
  template: `
    <app-layout [loggedIn]="loggedIn$ | async">
      <router-outlet></router-outlet>
    </app-layout>
  `,
  styles: []
})
export class AppComponent {
  loggedIn$: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) {
    this.loggedIn$ = store.select(fromAuth.getLoggedIn);
  }
}
