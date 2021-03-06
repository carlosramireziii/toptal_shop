import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AddProductDialogComponent } from './add-product-dialog';
import { EditProductDialogComponent } from './edit-product-dialog';

export const COMPONENTS = [
  AddProductDialogComponent,
  EditProductDialogComponent,
];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  entryComponents: [AddProductDialogComponent, EditProductDialogComponent],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
