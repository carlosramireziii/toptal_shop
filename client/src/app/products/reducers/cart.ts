import { createSelector } from '@ngrx/store';
import { Product } from '../models/product';
import * as cart from '../actions/cart';

export interface State {
  ids: number[],
  quantities: { [id: number]: number }
}

export const initialState: State = {
  ids: [],
  quantities: {}
}

export function reducer(state = initialState, action: cart.Actions): State {
  switch (action.type) {
    case cart.ADD_ITEM: {
      const item = action.payload;

      const newCount = state.quantities[item.id] ? state.quantities[item.id]+1 : 1;
      const ids = state.ids.filter(id => id !== item.id)

      return Object.assign({}, state, {
        ids: [...ids, item.id],
        quantities: Object.assign({}, state.quantities, { [item.id]: newCount })
      });
    }

    case cart.REMOVE_ITEM: {
      const item = action.payload;

      const newCount = state.quantities[item.id] ? state.quantities[item.id]-1 : 0;
      const ids = state.ids.filter(id => id !== item.id)

      return Object.assign({}, state, {
        ids: [...ids, item.id],
        quantities: Object.assign({}, state.quantities, { [item.id]: newCount })
      });
    }

    default: {
      return state;
    }
  }
}

export const getQuantities = (state: State) => state.quantities;
export const getIds = (state: State) => state.ids;
