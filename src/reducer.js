import update from 'immutability-helper';
import { default as initialState } from './model';
import * as types from './actions/actionTypes';
import config from './config';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_KIMONOS_FAILURE: {
      return update(state, {
        gallery: {
          error: { $set: true },
          loaded: { $set: true }
        }
      })
    }
    case types.GET_KIMONOS_SUCCESS: {
      return update(state, {
        gallery: {
          kimonos: { $set: action.kimonos },
          loaded: { $set: true },
          start: { $set: action.start }
        }
      })
    }
    case types.SAVE_FINISHED_IMAGE: {
      return update(state, {
        design: {
          imageData: { $set: action.imageData }
        }
      })
    }
    case types.SET_MAX_SCALE: {
      return update(state, {
        design: {
          maxScale: { $set: action.scale }
        }
      })
    }
    case types.SUBMITTING_KIMONO: {
      return update(state, {
        design: {
          step: { $set: config.designSteps.SUBMITTING }
        }
      })
    }
    case types.SUBMIT_KIMONO_FAILURE: {
      return update(state, {
        design: {
          error: { $set: true },
          step: { $set: config.designSteps.SUBMITTED }
        }
      })
    }
    case types.SUBMIT_KIMONO_SUCCESS: {
      return update(state, {
        design: {
          step: { $set: config.designSteps.SUBMITTED }
        }
      })
    }
    case types.USER_FINISHED_DESIGNING: {
      return update(state, {
        design: {
          step: { $set: config.designSteps.SIGNING }
        }
      })
    }
    case types.USER_LEFT_DESIGN_PAGE: {
      return update(state, {
        design: {
          error: { $set: false },
          form: {
            handle: { $set: '' },
            name: { $set: '' },
            title: { $set: '' }
          },
          imageData: { $set: null },
          maxScale: { $set: 2 },
          step: { $set: config.designSteps.EMPTY },
          userImage: { $set: null }
        }
      })
    }
    case types.USER_UPLOADED_IMAGE: {
      return update(state, {
        design: {
          userImage: { $set: action.image },
          step: { $set: config.designSteps.EDITING }
        }
      })
    }
    case types.UPDATE_HANDLE: {
      return update(state, {
        design: {
          form: {
            handle: { $set: action.handle }
          }
        }
      })
    }
    case types.UPDATE_NAME: {
      return update(state, {
        design: {
          form: {
            name: { $set: action.name }
          }
        }
      })
    }
    case types.UPDATE_TITLE: {
      return update(state, {
        design: {
          form: {
            title: { $set: action.title }
          }
        }
      })
    }
    default:
      return state;
  }
}

export default reducer;
