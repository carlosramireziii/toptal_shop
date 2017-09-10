import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ShoppingListComponent } from './shopping-list';
import { ProductPreviewComponent } from './product-preview';
import { ProductPreviewListComponent } from './product-preview-list';

export const COMPONENTS = [
  ShoppingListComponent,
  ProductPreviewComponent,
  ProductPreviewListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
