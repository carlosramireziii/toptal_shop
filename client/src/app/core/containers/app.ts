import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
    <footer>&copy; 2017 Carlos Ramirez III</footer>
  `,
  styles: []
})
export class AppComponent {}
