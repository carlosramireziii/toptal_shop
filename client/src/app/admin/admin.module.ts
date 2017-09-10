import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

import { ProductsCollectionPageComponent } from './containers/products-collection-page';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule, 
    RouterModule.forChild([
      {
        path: '', component: ProductsCollectionPageComponent
      },
    ]),
    StoreModule.forFeature('admin', reducers),
  ],
  declarations: [ProductsCollectionPageComponent],
})
export class AdminModule {}
