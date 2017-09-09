import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCart from './cart';
import * as fromProducts from './products';
import * as fromCollection from './collection';
import * as fromRoot from '../../reducers';

export interface ProductsState {
  cart: fromCart.State,
  products: fromProducts.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  'products': ProductsState;
}

export const reducers = {
  cart: fromCart.reducer,
  products: fromProducts.reducer,
  collection: fromCollection.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

// Cart selectors
export const getCartState = createSelector(
  getProductsState,
  (state: ProductsState) => state.cart
)
export const getCartQuantities = createSelector(
  getCartState,
  fromCart.getQuantities
)

// Products selectors
export const getProductEntitiesState = createSelector(
  getProductsState,
  (state: ProductsState) => state.products
);
export const getProductEntities = createSelector(
  getProductEntitiesState,
  fromProducts.getEntities
);
export const getProductIds = createSelector(
  getProductEntitiesState,
  fromProducts.getIds
);

// Collection selectors
export const getCollectionState = createSelector(
  getProductsState,
  (state: ProductsState) => state.collection
);
export const getCollectionLoaded = createSelector(
  getCollectionState,
  fromCollection.getLoaded
);
export const getCollectionLoading = createSelector(
  getCollectionState,
  fromCollection.getLoading
);
export const getCollectionProductIds = createSelector(
  getCollectionState,
  fromCollection.getIds
);

export const getProductCollection = createSelector(
  getProductEntities,
  getCollectionProductIds,
  (entities, ids) => {
    return ids.map(id => entities[id]);
  }
);
