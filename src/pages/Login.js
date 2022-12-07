import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginSubmit } from '../actions';
import './loginPageStyle.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      isDisabled: true,
    };
    this.handleWithChange = this.handleWithChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleWithChange({ target }) {
    this.setState({ [target.name]: target.value }, () => {
      this.setState({
        isDisabled: true,
      });
      const { email, password } = this.state;
      const passwLenght = 6;
      const emailVal = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      if (password.length >= passwLenght && email.match(emailVal)) {
        this.setState({
          isDisabled: false,
        });
      }
    });
  }

  handleSubmit() {
    const { history } = this.props;
    const { actionLogin } = this.props;
    actionLogin(this.state);
    history.push('/carteira');
  }

  render() {
    const { password, email, isDisabled } = this.state;
    return (
      <div className="login-page">
        <div className="login-page-body">
          <h2 className="logoWallet">
            TrybeWallet
          </h2>
          <form className="login-form">
            <label htmlFor="email">
              <input
                className="email"
                type="text"
                data-testid="email-input"
                name="email"
                value={ email }
                placeholder="Email"
                onChange={ this.handleWithChange }
              />
            </label>
            <label htmlFor="psswd">
              <input
                className="senha"
                type="password"
                id="psswd"
                data-testid="password-input"
                name="password"
                value={ password }
                placeholder="Senha"
                onChange={ this.handleWithChange }
              />
            </label>
            <button
              className="login-bnt"
              disabled={ isDisabled }
              onClick={ this.handleSubmit || this.buttonEnable }
              type="button"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionLogin: (info) => dispatch(loginSubmit(info)),
});

Login.propTypes = {
  actionLogin: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
