import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-preview-list',
  template: `
    <ul>
      <app-product-preview *ngFor="let product of products" [product]="product"></app-product-preview>
    </ul>
  `,
  styles: []
})
export class ProductPreviewListComponent {
  @Input() products: Product[];
}
