import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const LOAD = '[Book] Load';

export class Load implements Action {
  readonly type = LOAD;

  constructor(public payload: Product) {}
}

export type Actions = Load;
