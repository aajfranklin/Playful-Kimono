import config from './config';

const state = {
  design: {
    error: false,
    imageData: null,
    step: config.designSteps.EMPTY,
    userImage: null,
  },
  gallery: {
    error: false,
    kimonos: [],
    loaded: false
  }
};

export default state;