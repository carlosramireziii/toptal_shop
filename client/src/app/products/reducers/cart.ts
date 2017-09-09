import { createSelector } from '@ngrx/store';
import { Product } from '../models/product';
import * as cart from '../actions/cart';

export interface State {
  ids: number[];
}

export const initialState: State = {
  ids: [],
}

export function reducer(state = initialState, action: cart.Actions): State {
  switch (action.type) {
    case cart.ADD_ITEM: {
      const item = action.payload;

      if (state.ids.indexOf(item.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [...state.ids, item.id],
      });
    }

    default: {
      return state;
    }
  }
}

export const getItems = (state: State) => state.items;
export const getIds = (state: State) => state.ids;
export const getAll = createSelector(getItems, getIds, (items, ids) => {
  return ids.map(id => items[id]);
});
