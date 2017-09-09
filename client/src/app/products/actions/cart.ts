import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const ADD_ITEM = '[Cart] Add Item';

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Product) {}
}

export type Actions = 
  | AddItem;
