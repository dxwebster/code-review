import produce from 'immer';

import {
  TYPE_AUTH_SIGN_IN_SUCCESS,
  TYPE_AUTH_SIGN_IN_FAILURE
} from '../../../constants/types-reducers';

export const INITIAL_STATE = {
  userLogged: '',
  credencialError: ''
};

export function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      
      case TYPE_AUTH_SIGN_IN_SUCCESS: {
        draft.userLogged = action.payload.user;
        break;
      }
      case TYPE_AUTH_SIGN_IN_FAILURE: {
        draft.credencialError = action.payload;
        break;
      }

      default:
    }
  });
}
