import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-preview-list',
  template: `
    <md-grid-list class="mat-typography" cols="3" rowHeight="2:1">
      <md-grid-tile *ngFor="let product of products">
        <img src="http://placehold.it/500x500">
          <md-grid-tile-footer>
            <span>{{ product.name }}</span>
            <div>
              <button md-icon-button (click)="onAddToCart(product)"><md-icon>add_shopping_cart</md-icon></button>
              <span>{{ quantityInCart(product) }}</span>
              <button [disabled]="inCart(product) ? null : 'disabled'" md-icon-button (click)="onRemoveFromCart(product)"><md-icon>remove_shopping_cart</md-icon></button>
            </div>
          </md-grid-tile-footer>
      </md-grid-tile>
    </md-grid-list>
  `,
  styles: [
    `.mat-grid-tile-footer { justify-content: space-between; }`,
  ]
})
export class ProductPreviewListComponent {
  @Input() products: Product[];
  @Input() cart: {};
  @Output() add = new EventEmitter<Product>();
  @Output() remove = new EventEmitter<Product>();

  inCart(product: Product) {
    return this.quantityInCart(product) > 0;
  }

  quantityInCart(product: Product) {
    return this.cart[product.id] || 0;
  }

  onAddToCart(item: Product) {
    this.add.emit(item); 
  }

  onRemoveFromCart(item: Product) {
    this.remove.emit(item);
  }
}
