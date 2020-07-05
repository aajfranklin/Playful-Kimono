import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { GET, POST, S3PUT } from '../utils';
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

export const setMaxScale = (scale) => ({
  type: types.SET_MAX_SCALE,
  scale
});

export const submittingKimono = () => ({
  type: types.SUBMITTING_KIMONO
});

export const submitKimonoFailure = () => ({
  type: types.SUBMIT_KIMONO_FAILURE
});

export const submitKimonoSuccess = () => ({
  type: types.SUBMIT_KIMONO_SUCCESS
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
DESIGN ACTIONS
------------------------------------------------------------------------------------------------------------------------
 */

export const uploadKimono = (data) => dispatch => {
  dispatch(submittingKimono());
  let id;
  
  GET(config.api.endpoints.presignedUrl)
    .then(res => {
      id = res.id;
      return S3PUT(res.url, new File([data.imageData], 'temp.png'));
    })
    .then(() => {
      const kimono = {
        created: moment.now(),
        handle: data.handle || '-',
        name: data.name,
        title: data.title,
        url: `https://kimono.s3-eu-west-1.amazonaws.com/${id}.png`,
        uuid: uuidv4()
      };
      
      return POST(config.api.endpoints.kimonos, JSON.stringify(kimono));
    })
    .then(() => dispatch(submitKimonoSuccess()))
    .catch(() => dispatch(submitKimonoFailure()));
};

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
