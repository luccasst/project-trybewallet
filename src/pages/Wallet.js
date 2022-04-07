import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencie, fetchExpense } from '../actions';

import Form from '../form/Form';
import Table from '../form/Table';

class Wallet extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  handleButtonSubmit = () => {
    const { expenses } = this.props;
    expenses(this.state);
    this.setState({
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    });
    this.setState((previousStates) => ({
      id: previousStates.id + 1,
    }));
  }

  handleTotalSum = () => {
    const { sumExpenses } = this.props;
    let soma = 0;
    sumExpenses.forEach((expense) => {
      soma += Number(expense.value) * Number(expense.exchangeRates[expense.currency].ask);
      return 1;
    });
    return soma.toFixed(2);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value });
  }

  render() {
    const { user, wallet, sumExpenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const amount = this.handleTotalSum();
    return (
      <div>
        <header>
          <div>TrybeWallet</div>
          <h3 data-testid="email-field">{ user}</h3>
          <span data-testid="total-field">{ amount }</span>
          <p data-testid="header-currency-field">conversão: BRL</p>
        </header>
        <Form
          inputValor={ value }
          inputDescription={ description }
          inputCurrency={ currency }
          inputMethod={ method }
          inputTag={ tag }
          handleButtons={ this.handleButtonSubmit }
          handleChanges={ this.handleChange }
          wallet={ wallet }
        />
        <Table
          expenses={ sumExpenses }
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user.email,
  wallet: state.wallet.currencies,
  sumExpenses: state.wallet.expenses,
});
const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrencie()),
  expenses: (state) => dispatch(fetchExpense(state)),
});

Wallet.propTypes = {
  user: PropTypes.string.isRequired,
  currencies: PropTypes.func.isRequired,
  expenses: PropTypes.func.isRequired,
  wallet: PropTypes.arrayOf(PropTypes.any).isRequired,
  sumExpenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
