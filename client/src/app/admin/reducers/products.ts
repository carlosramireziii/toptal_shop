import { createSelector } from '@ngrx/store';
import { Product } from '../models/product';
import * as product from '../actions/product';
import * as collection from '../actions/collection';

export interface State {
  ids: number[];
  entities: { [id: number]: Product };
}

export const initialState: State = {
  ids: [],
  entities: {},
};

export function reducer(state = initialState, action: product.Actions | collection.Actions): State {
  switch (action.type) {
    case collection.LOAD_SUCCESS: {
      const products = action.payload;
      const newProducts = products.filter(product => !state.entities[product.id]);

      const newProductIds = newProducts.map(product => product.id);
      const newProductEntities = newProducts.reduce(
        (entities: { [id: number]: Product }, product: Product) => {
          return Object.assign(entities, {
            [product.id]: product,
          });
        },
        {}
      );

      return {
        ids: [...state.ids, ...newProductIds],
        entities: Object.assign({}, state.entities, newProductEntities)
      };
    }

    default: {
      return state;
    }
  }
}

export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getAll = createSelector(getEntities, getIds, (entities, ids) => {
  return ids.map(id => entities[id]);
});
