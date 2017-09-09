import 'rxjs/add/operator/let';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromProducts from '../reducers';
import * as collection from '../actions/collection';
import * as cart from '../actions/cart';
import { Product } from '../models/product';

@Component({
  selector: 'products-collection-page',
  template: `
    <h1>Products</h1>
    <app-product-preview-list 
      [products]="products$ | async"
      (add)="addToCart($event)">
    </app-product-preview-list>
  `,
  styles: []
})
export class CollectionPageComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<fromProducts.State>) {
    this.products$ = store.select(fromProducts.getProductCollection);
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }

  addToCart(item: Product) {
    this.store.dispatch(new cart.AddItem(item));
  }
}
