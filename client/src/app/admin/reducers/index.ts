import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromProducts from './products';
import * as fromCollection from './collection';
import * as fromRoot from '../../reducers';

export interface AdminState {
  products: fromProducts.State;
  collection: fromCollection.State;
}

export interface State extends fromRoot.State {
  'admin': AdminState;
}

export const reducers = {
  products: fromProducts.reducer,
  collection: fromCollection.reducer
}

export const getAdminState = createFeatureSelector<AdminState>('admin');

// Products selectors
export const getProductEntitiesState = createSelector(
  getAdminState,
  (state: AdminState) => state.products
);
export const getProductEntities = createSelector(
  getProductEntitiesState,
  fromProducts.getEntities
);

// Collection selectors
export const getCollectionState = createSelector(
  getAdminState,
  (state: AdminState) => state.collection
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
