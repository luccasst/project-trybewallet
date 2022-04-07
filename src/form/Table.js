import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component {
  render() {
    const tableCamps = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
      'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            { tableCamps.map((tableCamp) => <th key={ tableCamp }>{ tableCamp }</th>)}
          </tr>
        </thead>
        <tbody>
          { expenses
            .map((expense, index) => (
              <tr key={ index } id={ expense.id }>
                <td>{ expense.description }</td>
                <td>{ expense.method }</td>
                <td>{ expense.tag }</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name }</td>
                <td>
                  {Number(expense.exchangeRates[expense.currency]
                    .ask).toFixed(2) }
                </td>
                <td>
                  {(Number(expense.value) * Number(expense
                    .exchangeRates[expense.currency].ask)).toFixed(2)}
                </td>
                <td>Real</td>
              </tr>
            ))}
        </tbody>
      </table>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Table;
