import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { ProductCollectionEffects } from './effects/product-collection';

import { ProductsCollectionPageComponent } from './containers/products-collection-page';

import { ProductService } from './services/product';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule, 
    MaterialModule, 
    HttpClientModule,
    RouterModule.forChild([
      {
        path: 'products', component: ProductsCollectionPageComponent
      },
    ]),
    StoreModule.forFeature('admin', reducers),
    EffectsModule.forFeature([ProductCollectionEffects]),
  ],
  declarations: [ProductsCollectionPageComponent],
  providers: [ProductService]
})
export class AdminModule {}
