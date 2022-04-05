import React from 'react';

class Table extends React.Component {
  render() {
    const tableCamps = ['Descrição', 'Tag', 'Método de pagamento', 'Valor',
      'Moeda', 'Câmbio utilizado',
      'Valor convertido', 'Moeda de conversão', 'Editar/Excluir'];
    return (
      <table>
        <thead>
          <tr>
            { tableCamps.map((tableCamp) => <th key={ tableCamp }>{ tableCamp }</th>)}
          </tr>
        </thead>
      </table>
    );
  }
}

export default Table;
