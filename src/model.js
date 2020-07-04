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