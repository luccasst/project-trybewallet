import React from 'react';
import PropTypes from 'prop-types';
import './formStyle.css';

class Form extends React.Component {
  render() {
    const paymentMethod = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const category = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    const { inputValor, inputTag, inputMethod,
      inputDescription, inputCurrency,
      handleButtons, handleChanges, wallet } = this.props;
    return (
      <div>
        <label
          className="value"
          htmlFor="input-value"
        >
          Valor:
          <input
            className="valor"
            type="number"
            name="value"
            data-testid="value-input"
            id="input-value"
            value={ inputValor }
            onChange={ handleChanges }
          />
        </label>
        <label
          className="descript"
          htmlFor="input-description"
        >
          Descrição:
          <input
            className="descricao"
            type="text"
            name="description"
            data-testid="description-input"
            id="input-description"
            value={ inputDescription }
            onChange={ handleChanges }
          />
        </label>
        <label
          className="coin"
          htmlFor="moeda"
        >
          Moeda:
          <select
            className="moeda"
            name="currency"
            id="moeda"
            data-testid="currency-input"
            value={ inputCurrency }
            onChange={ handleChanges }
          >
            { wallet.map((info) => (<option key={ info }>{ info }</option>)) }
          </select>
        </label>
        <label
          className="method"
          htmlFor="input-select"
        >
          Método de pagamento:
          <select
            className="pagamento"
            id="input-select"
            data-testid="method-input"
            name="method"
            value={ inputMethod }
            onChange={ handleChanges }
          >
            { paymentMethod.map((methods) => (
              <option key={ methods }>
                { methods }
              </option>))}
          </select>
        </label>
        <label
          className="category"
          htmlFor="select-category"
        >
          Categoria:
          <select
            className="pagamento"
            data-testid="tag-input"
            id="select-category"
            name="tag"
            value={ inputTag }
            onChange={ handleChanges }
          >
            { category.map((categ) => (
              <option key={ categ }>
                { categ }
              </option>))}
          </select>
        </label>
        <button
          className="button"
          onClick={ handleButtons }
          type="button"
        >
          Adicionar
        </button>
      </div>
    );
  }
}
/* Resolução feita com ajuda de Ary Barbosa, turma 16 */

Form.propTypes = {
  inputValor: PropTypes.string.isRequired,
  inputDescription: PropTypes.string.isRequired,
  inputMethod: PropTypes.string.isRequired,
  inputTag: PropTypes.string.isRequired,
  inputCurrency: PropTypes.string.isRequired,
  handleButtons: PropTypes.func.isRequired,
  handleChanges: PropTypes.func.isRequired,
  wallet: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Form;
