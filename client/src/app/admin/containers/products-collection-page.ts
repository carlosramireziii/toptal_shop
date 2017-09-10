import 'rxjs/add/operator/let';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromProducts from '../reducers';
import * as collection from '../actions/collection';
import { Product } from '../models/product';

@Component({
  selector: 'admin-products-collection-page',
  template: `
    <h1> Admin Products </h1>
  `,
  styles: []
})
export class ProductsCollectionPageComponent implements OnInit {
  constructor(private store: Store<fromProducts.State>) {
  
  }

  ngOnInit() {}
}
