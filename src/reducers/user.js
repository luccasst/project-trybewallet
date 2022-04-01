// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SUBMIT } from '../actions';

const INITIAL_STATE = {
  email: '',
};

function reducerLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SUBMIT:
    return {
      ...state,
      email: action.payload.email,
    };
  default: return state;
  }
}

export default reducerLogin;
