import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Authenticate } from '../models/user';

@Component({
  selector: 'app-login-form',
  template: `
    <md-card>
      <md-card-title>Login</md-card-title>
      <md-card-content>
        <form [formGroup]="form" (ngSubmit)="submit()">
          <p>
            <md-input-container>
              <input type="email" mdInput placeholder="Email" formControlName="email">
            </md-input-container>
          </p>

          <p>
            <md-input-container>
              <input type="password" mdInput placeholder="Password" formControlName="password">
            </md-input-container>
          </p>

          <p *ngIf="errorMessage" class="loginError">
            {{ errorMessage }}
          </p>          
        
          <p class="loginButtons">
            <button type="submit" md-button>Login</button>
          </p>

        </form>
      </md-card-content>
    </md-card>
  `,
  styles: [],
})
export class LoginFormComponent implements OnInit {
  @Input()
  set pending(isPending: boolean) {
    if (isPending) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }

  @Input() errorMessage: string | null;

  @Output() submitted = new EventEmitter<Authenticate>();

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor() {}

  ngOnInit() {}

  submit() {
    if (this.form.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}
