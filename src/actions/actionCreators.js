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

export const userUploadedImage = (image) => ({
  type: types.USER_UPLOADED_IMAGE,
  image
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
