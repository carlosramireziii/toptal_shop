import { Action } from '@ngrx/store';
import { Order } from '../models/order';

export const CREATE = '[Order] Create';
export const CREATE_SUCCESS = '[Order] Create Success';
export const CREATE_FAIL = '[Order] Create Fail';

export class Create implements Action {
  readonly type = CREATE;

  constructor(public payload: Order) {}
}
export class CreateSuccess implements Action {
  readonly type = CREATE_SUCCESS;

  constructor(public payload: Order) {}
}
export class CreateFail implements Action {
  readonly type = CREATE_FAIL;

  constructor(public payload: any) {}
}

export type Actions =
  | Create
  | CreateSuccess
  | CreateFail;
