import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import * as collection from '../actions/collection';
import { Product } from '../models/product';
import { ProductService } from '../services/product';

@Injectable()
export class ProductCollectionEffects {
  @Effect()
  loadCollection$: Observable<Action> = this.actions$
    .ofType(collection.LOAD)
    .switchMap((payload) => this.productService.load()
      .map((products: Product[]) => new collection.LoadSuccess(products))
      .catch(error => of(new collection.LoadFail(error)))
		);

	@Effect()
  addProductToCollection$: Observable<Action> = this.actions$
    .ofType(collection.ADD_PRODUCT)
		.switchMap((payload) => this.productService.add(payload)
			.map((product: Product) => new collection.AddProductSuccess(product))
			.catch(error => of(new collection.AddProductFail(error)))
		);

	@Effect()
  removeProductFromCollection$: Observable<Action> = this.actions$
    .ofType(collection.REMOVE_PRODUCT)
		.switchMap((payload) => this.productService.remove(payload)
			.map((product: Product) => new collection.RemoveProductSuccess(product))
      .catch(error => of(new collection.RemoveProductFail(error)))
    );

  constructor(private actions$: Actions, private productService: ProductService) {}
}
