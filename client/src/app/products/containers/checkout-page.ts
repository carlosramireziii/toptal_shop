import 'rxjs/add/operator/let';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { FormGroup, FormControl } from '@angular/forms';

import * as fromProducts from '../reducers';
import * as collection from '../actions/collection';
import * as cart from '../actions/cart';
import * as order from '../actions/order';
import { Product } from '../models/product';
import { Order } from '../models/order';

@Component({
  selector: 'checkout-page',
  template: `
    <md-toolbar color="primary">
      <span class="mat-headline">Checkout</span>
    </md-toolbar>
    <md-sidenav mode="side" position="end" opened="open">
      <app-shopping-list 
        [cart]="cart$ | async"
        [products]="products$ | async">
      </app-shopping-list>
    </md-sidenav>
		<form>
			<p>
				<md-input-container>
					<input type="email" mdInput placeholder="Email" formControlName="email">
				</md-input-container>
			</p>
			<p>
				<md-input-container>
					<input type="text" mdInput placeholder="Shipping Address" formControlName="shippingAddress">
				</md-input-container>
			</p>
			<p>
				<md-input-container>
					<input type="text" mdInput placeholder="Billing Address" formControlName="billingAddress">
				</md-input-container>
			</p>
		</form>
		<button md-raised-button color="accent" (click)="openCheckout()">Purchase</button>
  `,
  styles: [
    `.mat-raised-button { margin-top: 16px; }`
	]
})
export class CheckoutPageComponent implements OnInit {
  products$: Observable<Product[]>;
  cart$: Observable<{}>;

  constructor(private store: Store<fromProducts.State>) {
    this.products$ = store.select(fromProducts.getProductCollection);
    this.cart$ = store.select(fromProducts.getCartQuantities);
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
		address: new FormControl(''),
  });

	openCheckout() {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_tfXl0htVKKz4sGJt0HKdCPi7',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        this.createOrder(token);
      }.bind(this)
    });

    handler.open({
      name: 'Toptal Shop',
      amount: 2000
    });
  }

  createOrder(token) {
    const data: Order = {
      email: "carlos@test.com",
      product_ids: [1, 2], 
    }

    this.store.dispatch(new order.Create(data));
  }

  productIds() {
    return [1, 2];
  }

  ngOnInit() {
    this.store.dispatch(new collection.Load());
  }
}
