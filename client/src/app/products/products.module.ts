import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

import { ComponentsModule } from './components';
import { CollectionEffects } from './effects/collection';

import { CollectionPageComponent } from './containers/collection-page';

import { ProductService } from './services/product';

import { reducers } from './reducers';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    HttpClientModule,
    RouterModule.forChild([
      { 
        path: '', component: CollectionPageComponent 
      },
    ]),
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature([CollectionEffects]),
  ],
  declarations: [
    CollectionPageComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
