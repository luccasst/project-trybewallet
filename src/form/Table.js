import React from 'react';
import PropTypes from 'prop-types';
import './tableStyle.css';

class Table extends React.Component {
  render() {
    const tableCamps = ['Descrição', 'Tag', 'Pagamento', 'Valor',
      'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    const { expenses } = this.props;
    return (
      <div>
        <table>
          <thead>
            <tr className="descrip">
              { tableCamps.map((tableCamp) => <th key={ tableCamp }>{ tableCamp }</th>)}
            </tr>
          </thead>
          <tbody>
            { expenses
              .map((expense, index) => (
                <tr key={ index } id={ expense.id }>
                  <td className="descri">{ expense.description }</td>
                  <td className="tag">{ expense.tag }</td>
                  <td className="method">{ expense.method }</td>
                  <td className="value">{ Number(expense.value).toFixed(2) }</td>
                  <td className="currency">
                    { expense.exchangeRates[expense.currency].name }

                  </td>
                  <td className="utilizado">
                    {Number(expense.exchangeRates[expense.currency]
                      .ask).toFixed(2) }
                  </td>
                  <td className="conversao">
                    {(Number(expense.value) * Number(expense
                      .exchangeRates[expense.currency].ask)).toFixed(2)}
                  </td>
                  <td className="real">Real</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}
Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Table;
