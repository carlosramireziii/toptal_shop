import * as collection from '../actions/collection';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: number[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

export function reducer(state = initialState, action: collection.Actions): State {
  switch (action.type) {
    case collection.LOAD: {
      return Object.assign({}, state, {
        loading: true,
      });
    }

    case collection.LOAD_SUCCESS: {
      const entities = action.payload;

      return {
        loaded: true,
        loading: false,
        ids: entities.map(entity => entity.id),
      };
    }

    case collection.ADD_PRODUCT_SUCCESS:
		case collection.REMOVE_PRODUCT_FAIL: {
      const product = action.payload;

      if (state.ids.indexOf(product.id) > -1) {
        return state;
      }

      return Object.assign({}, state, {
        ids: [...state.ids, product.id],
      });
    }    
    
		case collection.REMOVE_PRODUCT_SUCCESS:
    case collection.ADD_PRODUCT_FAIL: {
      const product = action.payload;

      return Object.assign({}, state, {
        ids: state.ids.filter(id => id !== product.id),
      });
    }

    default: {
      return state;
    }
  }
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state: State) => state.loading;
export const getIds = (state: State) => state.ids;
