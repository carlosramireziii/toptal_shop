import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-preview',
  template: `
    <li>{{ product.name }}</li>
  `,
  styles: []
})
export class ProductPreviewComponent {
  @Input() product: Product;
}
