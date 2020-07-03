import { GET } from '../utils';
import * as types from './actionTypes';
import config from '../config';

/*
------------------------------------------------------------------------------------------------------------------------
ACTIONS
------------------------------------------------------------------------------------------------------------------------
 */

export const getKimonosFailure = () => ({
  type: types.GET_KIMONOS_FAILURE
});

export const getKimonosSuccess = (kimonos) => ({
  type: types.GET_KIMONOS_SUCCESS,
  kimonos
});

/*
------------------------------------------------------------------------------------------------------------------------
GALLERY ACTIONS
------------------------------------------------------------------------------------------------------------------------
 */

export const getKimonos = () => dispatch => {
  GET(config.api.endpoints.kimonos)
    .then(kimonos => dispatch(getKimonosSuccess(kimonos)))
    .catch(() => dispatch(getKimonosFailure()));
};
