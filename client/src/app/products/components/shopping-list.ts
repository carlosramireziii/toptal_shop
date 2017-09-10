import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-shopping-list',
  template: `
    <md-toolbar color="accent">My Shopping Cart</md-toolbar>
    <md-list>
      <md-list-item *ngIf="empty()">
        <div class="mat-caption">Items will appear here</div>
      </md-list-item>
      <md-list-item *ngFor="let item of items()">
        <p mdLine>{{ item.name }}</p>
        <p mdLine class="mat-caption">Quantity: {{ quantity(item) }}</p>
      </md-list-item>
      <md-divider></md-divider>
    </md-list>
    <div class="centered">
      <button md-raised-button color="accent">Checkout</button>
    </div>
  `,
  styles: [
  `
  .centered { text-align: center; }
  .mat-raised-button { margin-top: 16px; }
  `
  ]
})
export class ShoppingListComponent {
  @Input() cart: {};
  @Input() products: Product[];

  empty() {
    return this.items().length === 0;
  }

  items() {
    return this.products.filter(product => this.cart[product.id] > 0);
  }

  quantity(product) {
    return this.cart[product.id];
  }
}
