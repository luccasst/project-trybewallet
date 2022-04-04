// Coloque aqui suas actions
export const SUBMIT = 'SUBMIT';
export const CURRENCIE = 'CURRENCIE';

export const loginSubmit = (payload) => ({ type: SUBMIT, payload });
export const currencieSubmit = (payload) => ({ type: CURRENCIE, payload });

export const fetchCurrencie = () => async (dispatch) => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  const result = Object.keys(data).filter((info) => !info.includes('USDT'));
  dispatch(currencieSubmit(result));
};
