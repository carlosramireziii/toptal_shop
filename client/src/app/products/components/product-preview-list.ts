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
            <button md-icon-button (click)="onCartButtonClicked(product)"><md-icon>add_shopping_cart</md-icon></button>
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
  @Output() add = new EventEmitter<Product>();

  onCartButtonClicked(item: Product) {
    this.add.emit(item); 
  }
}
