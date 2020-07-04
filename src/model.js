import config from './config';

const state = {
  design: {
    error: false,
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