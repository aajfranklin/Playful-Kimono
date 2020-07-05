import config from './config';

const state = {
  design: {
    error: false,
    form: {
      title: '',
      name: '',
      handle: ''
    },
    imageData: null,
    maxScale: 1,
    step: config.designSteps.EMPTY,
    userImage: null
  },
  gallery: {
    error: false,
    kimonos: [],
    loadedAll: false,
    loadedAny: false,
    loadingMore: false,
    start: 0
  }
};

export default state;