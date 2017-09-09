import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-preview',
  template: `
    <md-grid-tile>
      <img src="http://placehold.it/200x200">
      <md-grid-tile-header>{{ product.name }}</md-grid-tile-header>
    </md-grid-tile>
  `,
  styles: []
})
export class ProductPreviewComponent {
  @Input() product: Product;
}
