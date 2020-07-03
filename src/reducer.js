import update from 'immutability-helper';
import { default as initialState } from './model';
import * as types from './actions/actionTypes';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_KIMONOS_FAILURE: {
      return update(state, {
        gallery: {
          error: { $set: true },
          loaded: { $set: true }
        }
      })
    }
    case types.GET_KIMONOS_SUCCESS: {
      return update(state, {
        gallery: {
          kimonos: { $set: action.kimonos },
          loaded: { $set: true }
        }
      })
    }
    default:
      return state;
  }
}

export default reducer;
