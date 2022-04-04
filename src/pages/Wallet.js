import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCurrencie } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { currencies } = this.props;
    currencies();
  }

  render() {
    const { user, wallet } = this.props;
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <div>
        <header>
          <div>TrybeWallet</div>
          <h3 data-testid="email-field">{ user}</h3>
          <p data-testid="total-field">Valor: 0</p>
          <p data-testid="header-currency-field">moeda: BRL</p>
        </header>
        <form>
          <label htmlFor="input-value">
            Valor:
            <input type="number" data-testid="value-input" id="input-value" />
          </label>
          <label htmlFor="input-description">
            Descrição:
            <input type="text" data-testid="description-input" id="input-description" />
          </label>
          <label htmlFor="input-moeda">
            Moeda:
            <select id="input-moeda">
              { wallet.map((info) => (<option key={ info }>{info}</option>)) }
            </select>
          </label>
          <label htmlFor="input-select">
            Método de pagamento:
            <select id="input-select" data-testid="method-input">
              { paymentMethod.map((method) => (
                <option key={ method }>
                  { method }
                </option>))}
            </select>
          </label>
          <label htmlFor="select-category">
            Categoria:
            <select data-testid="tag-input">
              { category.map((categ) => (
                <option key={ categ }>
                  { categ }
                </option>))}
            </select>
          </label>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
  wallet: state.wallet.currencies,
});
const mapDispatchToProps = (dispatch) => ({
  currencies: () => dispatch(fetchCurrencie()),
});

Wallet.propTypes = {
  user: PropTypes.string.isRequired,
  currencies: PropTypes.func.isRequired,
  wallet: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
