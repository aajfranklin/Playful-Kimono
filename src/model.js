import config from './config';

const state = {
  home: {
    bottomColour: '#FF0000',
    topColour: '#FFFFFF',
    loaded: false
  },
  design: {
    error: false,
    form: {
      title: '',
      name: '',
      handle: ''
    },
    imageData: null,
    maxScale: 1,
    scrollDown: true,
    step: config.designSteps.EMPTY,
    userImage: null
  },
  gallery: {
    error: false,
    kimonos: [],
    lastMaximised: false,
    loadedAll: false,
    loadedAny: false,
    loadingMore: false,
    maximised: false,
    start: 0
  },
  isGoogleAnalyticsInitialised: false
};

export default state;