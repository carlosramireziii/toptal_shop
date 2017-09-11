import { createSelector } from '@ngrx/store';
import { Order } from '../models/order';
import * as order from '../actions/order';

export interface State {
	orders: Order[];
}

export const initialState: State = {
	orders: []
}

export function reducer(state = initialState, action: order.Actions): State {
  switch (action.type) {
    case order.CREATE: {
			const order = action.payload;
			
			return Object.assign({}, state, {
				orders: [...state.orders, order]
			});
		}

    default: {
      return state;
    }
  }
}

export const getOrders = (state: State) => state.orders;
