import { Action } from '@ngrx/store';
import { Product } from '../models/product';

export const LOAD = '[Collection] Load';
export const LOAD_SUCCESS = '[Collection] Load Success';
export const LOAD_FAIL = '[Collection] Load Fail';

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
