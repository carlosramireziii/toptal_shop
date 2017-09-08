import 'rxjs/add/operator/let';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromProducts from '../reducers';
import * as collection from '../actions/collection';
import { Product } from '../models/product';

@Component({
  selector: 'products-collection-page',
  template: `
    <h1>Products</h1>
    <ul>
      <li *ngFor="let product of products$ | async">{{ product.name }}</li>
    </ul>
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
}
