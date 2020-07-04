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

export const saveFinishedImage = (imageData) => ({
  type: types.SAVE_FINISHED_IMAGE,
  imageData
});

export const updateHandle = (handle) => ({
  type: types.UPDATE_HANDLE,
  handle
});

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});

export const updateTitle = (title) => ({
  type: types.UPDATE_TITLE,
  title
});

export const userFinishedDesigning = () => ({
  type: types.USER_FINISHED_DESIGNING
});

export const userLeftDesignPage = () => ({
  type: types.USER_LEFT_DESIGN_PAGE
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
