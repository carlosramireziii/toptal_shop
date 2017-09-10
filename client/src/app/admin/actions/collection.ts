import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const LOAD = '[Admin Collection] Load';
export const LOAD_SUCCESS = '[Admin Collection] Load Success';
export const LOAD_FAIL = '[Admin Collection] Load Fail';
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
	| RemoveProduct
	| RemoveProductSuccess
	| RemoveProductFail;
