import 'rxjs/add/operator/let';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { MdDialog } from '@angular/material';

import { AddProductDialogComponent } from '../components/add-product-dialog';

import * as fromProducts from '../reducers';
import * as collection from '../actions/collection';
import { Product } from '../models/product';

@Component({
  selector: 'admin-products-collection-page',
  template: `
    <md-toolbar color="primary">
      <span class="mat-headline">Manage Products</span>
      <span class="fill-remaining-space"></span>
      <button md-fab (click)="onAddClick()"><md-icon>add</md-icon></button>
    </md-toolbar>
    <md-table [dataSource]="dataSource">
			<ng-container mdColumnDef="id">
				<md-header-cell *mdHeaderCellDef> Id </md-header-cell>
				<md-cell *mdCellDef="let element"> {{element.id}} </md-cell>
			</ng-container>
			<ng-container mdColumnDef="name">
				<md-header-cell *mdHeaderCellDef> Name </md-header-cell>
				<md-cell *mdCellDef="let element"> {{element.name}} </md-cell>
			</ng-container>
      <ng-container mdColumnDef="actions">
        <md-header-cell *mdHeaderCellDef> </md-header-cell>
        <md-cell *mdCellDef="let element"> 
          <button md-button (click)="onDelete(element)"> Delete </button>
        </md-cell>
      </ng-container>
			<md-header-row *mdHeaderRowDef="['id', 'name', 'actions']"></md-header-row>
			<md-row *mdRowDef="let row; columns: ['id', 'name', 'actions'];"></md-row>
    </md-table>
  `,
  styles: [
  `
  .fill-remaining-space { flex: 1 1 auto; }
  `
  ]
})
export class ProductsCollectionPageComponent implements OnInit {
  products$: Observable<Product[]>;
	dataSource: {};

  constructor(public dialog: MdDialog, private store: Store<fromProducts.State>) {
    this.products$ = store.select(fromProducts.getProductCollection);
		this.dataSource = new ProductDataSource(this.products$);
  }

  onSubmit(product: Product) {
    console.log("products-collection-page", "onSubmit", product);
    this.store.dispatch(new collection.AddProduct(product));
  }

  onAddClick() {
    let dialogRef = this.dialog.open(AddProductDialogComponent, {
      data: { submitted: this.onSubmit.bind(this) }
    });
  }

  onDelete(product) {
    this.store.dispatch( new collection.RemoveProduct(product));
  }

  ngOnInit() {
    this.store.dispatch( new collection.Load());
  }
}

export class ProductDataSource extends DataSource<any> {
	data;

	constructor(data) {
		super();
		this.data = data;
	}

	connect(): Observable<Product[]> {
		return this.data;
  }

	disconnect() {}
}
