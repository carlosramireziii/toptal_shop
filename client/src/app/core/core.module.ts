import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { AppComponent } from './containers/app';
import { LayoutComponent } from './components/layout';
import { SidenavComponent } from './components/sidenav';
import { ToolbarComponent } from './components/toolbar';

export const COMPONENTS = [
  AppComponent,
  LayoutComponent,
  SidenavComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class CoreModule {
  static forRoot() {
    return { 
      ngModule: CoreModule
    }
  }
}
