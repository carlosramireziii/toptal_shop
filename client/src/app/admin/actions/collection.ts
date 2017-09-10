import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const LOAD = '[Admin Collection] Load';
export const LOAD_SUCCESS = '[Admin Collection] Load Success';
export const LOAD_FAIL = '[Admin Collection] Load Fail';
export const ADD_PRODUCT = '[Collection] Add Product';
export const ADD_PRODUCT_SUCCESS = '[Collection] Add Product Success';
export const ADD_PRODUCT_FAIL = '[Collection] Add Product Fail';
export const UPDATE_PRODUCT = '[Collection] Update Product';
export const UPDATE_PRODUCT_SUCCESS = '[Collection] Update Product Success';
export const UPDATE_PRODUCT_FAIL = '[Collection] Update Product Fail';
export const REMOVE_PRODUCT = '[Collection] Remove Product';
export const REMOVE_PRODUCT_SUCCESS = '[Collection] Remove Product Success';
export const REMOVE_PRODUCT_FAIL = '[Collection] Remove Product Fail';

// Load 

export class Load implements Action {
  readonly type = LOAD;
}
export class LoadSuccess implements Action {
  readonly type = LOAD_SUCCESS;

  constructor(public payload: Product[]) {}
}
export class LoadFail implements Action {
  readonly type = LOAD_FAIL;

  constructor(public payload: any) {}
}

// Add

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT;

  constructor(public payload: Product) {}
}

export class AddProductSuccess implements Action {
  readonly type = ADD_PRODUCT_SUCCESS;

  constructor(public payload: Product) {}
}

export class AddProductFail implements Action {
  readonly type = ADD_PRODUCT_FAIL;

  constructor(public payload: Product) {}
}

// Update

export class UpdateProduct implements Action {
  readonly type = UPDATE_PRODUCT;

  constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = UPDATE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
  readonly type = UPDATE_PRODUCT_FAIL;

  constructor(public payload: Product) {}
}

// Remove

export class RemoveProduct implements Action {
  readonly type = REMOVE_PRODUCT;

  constructor(public payload: Product) {}
}

export class RemoveProductSuccess implements Action {
  readonly type = REMOVE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {}
}

export class RemoveProductFail implements Action {
  readonly type = REMOVE_PRODUCT_FAIL;

  constructor(public payload: Product) {}
}

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail
	| AddProduct
	| AddProductSuccess
	| AddProductFail
  | UpdateProduct
  | UpdateProductSuccess
  | UpdateProductFail
	| RemoveProduct
	| RemoveProductSuccess
	| RemoveProductFail;
