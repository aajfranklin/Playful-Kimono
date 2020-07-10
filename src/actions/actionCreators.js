import { GET, POST, S3PUT } from '../utils';
import * as types from './actionTypes';
import config from '../config';

/*
------------------------------------------------------------------------------------------------------------------------
ACTIONS
------------------------------------------------------------------------------------------------------------------------
 */

export const clearLastMaximised = () => ({
  type: types.CLEAR_LAST_MAXIMISED
})

export const gettingMoreKimonos = () => ({
  type: types.GETTING_MORE_KIMONOS
});

export const getKimonosFailure = () => ({
  type: types.GET_KIMONOS_FAILURE
});

export const getKimonosSuccess = (kimonos, start) => ({
  type: types.GET_KIMONOS_SUCCESS,
  kimonos,
  start
});

export const gotAllKimonos = () => ({
  type: types.GOT_ALL_KIMONOS,
});

export const homeLoaded = () => ({
  type: types.HOME_LOADED
})

export const kimonoLoaded = (index) => ({
  type: types.KIMONO_LOADED,
  index
});

export const maximiseKimono = (index) => ({
  type: types.MAXIMISE_KIMONO,
  index
})

export const minimiseGallery = (lastMaximisedKimonoId) => ({
  type: types.MINIMISE_GALLERY,
  lastMaximisedKimonoId
})

export const minimiseKimono = (index) => ({
  type: types.MINIMISE_KIMONO,
  index
})

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

export const updateBackgroundGradient = (bottomColour, topColour) => ({
  type: types.UPDATE_BACKGROUND_GRADIENT,
  bottomColour,
  topColour
});

export const updateHandle = (handle) => ({
  type: types.UPDATE_HANDLE,
  handle
});

export const updateName = (name) => ({
  type: types.UPDATE_NAME,
  name
});

export const updateScrollDown = (scrollDown) => ({
  type: types.UPDATE_SCROLL_DOWN,
  scrollDown
})

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

export const userLeftHomePage = () => ({
  type: types.USER_LEFT_HOME_PAGE
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
        handle: data.handle || '-',
        name: data.name,
        title: data.title,
        url: `https://kimono.s3-eu-west-1.amazonaws.com/${id}.png`,
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

export const getKimonos = (start) => dispatch => {
  dispatch(gettingMoreKimonos());
  GET(config.api.endpoints.kimonos, `?_start=${start}&_limit=${config.kimonosPerPage}&_sort=createdAt:DESC`)
    .then(res => {
      if (res.hasNext === false) return dispatch(gotAllKimonos());
      dispatch(getKimonosSuccess(res.kimonos, start + config.kimonosPerPage))
    })
    .catch(() => dispatch(getKimonosFailure()));
};
