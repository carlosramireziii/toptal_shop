import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const ADD_ITEM = '[Cart] Add Item';
export const REMOVE_ITEM = '[Cart] Remove Item';

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Product) {}
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(public payload: Product) {}
}

export type Actions = 
  | AddItem
  | RemoveItem;
