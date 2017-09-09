import { Component, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-preview-list',
  template: `
    <md-grid-list class="mat-typography" cols="3" rowHeight="2:1">
      <md-grid-tile *ngFor="let product of products">
        <img src="http://placehold.it/500x500">
        <md-grid-tile-header>{{ product.name }}</md-grid-tile-header>
      </md-grid-tile>
    </md-grid-list>
  `,
  styles: []
})
export class ProductPreviewListComponent {
  @Input() products: Product[];
}
