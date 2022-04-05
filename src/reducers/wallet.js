// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCIE, EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function reducerWallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case CURRENCIE:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.expenses],
    };
  default: return state;
  }
}

export default reducerWallet;
