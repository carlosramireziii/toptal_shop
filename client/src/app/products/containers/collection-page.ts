import 'rxjs/add/operator/let';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import * as fromProducts from '../reducers';
import * as collection from '../actions/collection';
import * as cart from '../actions/cart';
import { Product } from '../models/product';

@Component({
  selector: 'products-collection-page',
  template: `
    <md-sidenav mode="side" position="end" opened="open">
      <app-shopping-list 
        [cart]="cart$ | async"
        [products]="products$ | async">
      </app-shopping-list>
      <div class="centered">
        <button md-raised-button color="accent" (click)="onCheckoutClicked()">Checkout</button>
      </div>
    </md-sidenav>
    <app-product-preview-list 
      [cart]="cart$ | async"
      [products]="products$ | async"
      (add)="addToCart($event)"
      (remove)="removeFromCart($event)">
    </app-product-preview-list>
  `,
  styles: [
    `.centered { text-align: center; }`,
    `.mat-raised-button { margin-top: 16px; }`
  ]
})
export class CollectionPageComponent implements OnInit {
  products$: Observable<Product[]>;
    cart$: Observable<{}>;

  constructor(private store: Store<fromProducts.State>, private router: Router) {
    this.products$ = store.select(fromProducts.getProductCollection);
    this.cart$ = store.select(fromProducts.getCartQuantities);
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }

  addToCart(item: Product) {
    this.store.dispatch(new cart.AddItem(item));
  }

  removeFromCart(item: Product) {
    this.store.dispatch(new cart.RemoveItem(item));
  }

  onCheckoutClicked() {
    this.router.navigate(['/products/checkout']);
  }
}
