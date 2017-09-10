import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const LOAD = '[Admin Collection] Load';
export const LOAD_SUCCESS = '[Admin Collection] Load Success';
export const LOAD_FAIL = '[Admin Collection] Load Fail';

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

export type Actions =
  | Load
  | LoadSuccess
  | LoadFail;
