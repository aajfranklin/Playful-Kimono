import update from 'immutability-helper';
import { default as initialState } from './model';
import * as types from './actions/actionTypes';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
