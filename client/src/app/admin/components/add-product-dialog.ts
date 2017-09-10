import { Component, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { Product } from '../models/product';

@Component({
  selector: 'add-product-dialog',
  template: `
    <div md-dialog>
      <md-dialog-content>
        <h1 class="mat-title">New Product</h1>
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
export class AddProductDialogComponent {
  constructor(
    public dialogRef: MdDialogRef<AddProductDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
  });

  submit() {
    if (this.form.valid) {
      this.dialogRef.close();
      this.data.submitted(this.form.value);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
