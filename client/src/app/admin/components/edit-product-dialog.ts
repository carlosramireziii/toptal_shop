import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Product } from '../models/product';

@Component({
  selector: 'edit-product-dialog',
  template: `
    <div md-dialog>
      <md-dialog-content>
        <h1 class="mat-title">Edit Product</h1>
        <form [formGroup]="form" (ngSubmit)="submit()"> 
          <p>
            <md-input-container>
              <input type="text" mdInput placeholder="Name" formControlName="name">
            </md-input-container>
          </p>
        </form>
      </md-dialog-content>
      <md-dialog-actions>
        <button md-button (click)="submit()">Save</button>
      </md-dialog-actions>
    </div>
  `,
  styles: []
})
export class EditProductDialogComponent implements OnInit {
  product: Product;

  constructor(
    public dialogRef: MdDialogRef<EditProductDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { 
      this.product = data.product;
    }

  ngOnInit() {
    this.form.setValue({
      name: this.product.name,
    });
  }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.dialogRef.close();
      console.log(this.form.value);
      const data = Object.assign({}, this.form.value, { id: this.product.id });
      this.data.onUpdate(data);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
