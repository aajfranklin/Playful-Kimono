import update from 'immutability-helper';
import { default as initialState } from './model';
import * as types from './actions/actionTypes';
import config from './config';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CLEAR_LAST_MAXIMISED: {
      return update(state, {
        gallery: {
          lastMaximised: { $set: false }
        }
      })
    }
    case types.GETTING_MORE_KIMONOS: {
      return update(state, {
        gallery: {
          loadingMore: { $set: true }
        }
      })
    }
    case types.GET_KIMONOS_FAILURE: {
      return update(state, {
        gallery: {
          error: { $set: true },
          loadedAll: { $set: true },
          loadedAny: { $set: true },
          loadingMore: { $set: false }
        }
      })
    }
    case types.GET_KIMONOS_SUCCESS: {
      return update(state, {
        gallery: {
          kimonos: { $push: action.kimonos },
          loadedAny: { $set: true },
          loadingMore: { $set: false },
          start: { $set: action.start }
        }
      })
    }
    case types.GOT_ALL_KIMONOS: {
      return update(state, {
        gallery: {
          loadedAll: { $set: true },
          loadingMore: { $set: false }
        }
      })
    }
    case types.HOME_LOADED: {
      return update(state, {
        home: {
          loaded: { $set: true }
        }
      })
    }
    case types.KIMONO_LOADED: {
      return update(state, {
        gallery: {
          kimonos: {
            [action.index]: {
              loaded: { $set: true }
            }
          }
        }
      });
    }
    case types.MAXIMISE_KIMONO: {
      return update(state, {
        gallery: {
          kimonos: {
            [action.index]: {
              maximised: { $set: true }
            }
          },
          maximised: { $set: true }
        }
      })
    }
    case types.MINIMISE_GALLERY: {
      return update(state, {
        gallery: {
          lastMaximised: { $set: action.lastMaximisedKimonoId },
          maximised: { $set: false }
        }
      })
    }
    case types.MINIMISE_KIMONO: {
      return update(state, {
        gallery: {
          kimonos: {
            [action.index]: {
              maximised: { $set: false }
            }
          }
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
          maxScale: { $set: 1 },
          step: { $set: config.designSteps.EMPTY },
          userImage: { $set: null }
        }
      })
    }
    case types.USER_LEFT_HOME_PAGE: {
      return update(state, {
        home: {
          loaded: { $set: false}
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
    case types.UPDATE_BACKGROUND_GRADIENT: {
      return update(state, {
        home: {
          bottomColour: { $set: action.bottomColour },
          topColour: { $set: action.topColour }
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
    case types.UPDATE_SCROLL_DOWN: {
      return update(state, {
        design: {
          scrollDown: { $set: action.scrollDown }
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
