import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Wallet extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <header>
        <div>TrybeWallet</div>
        <h3 data-testid="email-field">{ user}</h3>
        <p data-testid="total-field">Valor: 0</p>
        <p data-testid="header-currency-field">Moeda: BRL</p>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.email,
});

Wallet.propTypes = {
  user: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Wallet);
