import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductPreviewComponent } from './product-preview';
import { ProductPreviewListComponent } from './product-preview-list';

export const COMPONENTS = [
  ProductPreviewComponent,
  ProductPreviewListComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
