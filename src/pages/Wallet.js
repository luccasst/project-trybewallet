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
    return (
      <div>
        <header>
          <div>TrybeWallet</div>
          <h3 data-testid="email-field">{ user}</h3>
          <p data-testid="total-field">Valor: 0</p>
          <p data-testid="header-currency-field">Moeda: BRL</p>
        </header>
        <select>
          { wallet.map((info) => (<option key={ info }>{info}</option>)) }
        </select>
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
