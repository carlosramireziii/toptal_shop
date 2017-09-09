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
            <span *ngIf="existsInCart(product)">
              <button md-icon-button (click)="onRemoveFromCart(product)"><md-icon>remove_shopping_cart</md-icon></button>
            </span>
            <span *ngIf="!existsInCart(product)">
              <button md-icon-button (click)="onAddToCart(product)"><md-icon>add_shopping_cart</md-icon></button>
            </span>
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
  @Input() cart: number[];
  @Output() add = new EventEmitter<Product>();

  existsInCart(item: Product) {
    return this.cart.includes(item.id);
  }

  onAddToCart(item: Product) {
    this.add.emit(item); 
  }

  onRemoveFromCart(item: Product) {
    //this.remove.emit(item);
  }
}
