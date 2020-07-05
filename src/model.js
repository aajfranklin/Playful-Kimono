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
    maxScale: 2,
    step: config.designSteps.EMPTY,
    userImage: null
  },
  gallery: {
    error: false,
    kimonos: [],
    loaded: false
  }
};

export default state;