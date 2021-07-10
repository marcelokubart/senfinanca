import React from 'react'

const Valor = ({tipo, valor}) => {
  console.log(tipo, valor);
  const tipoValores = {
    'Entrada': <span className="movimentacoes-panel__list__item__value">R$ {valor.replace('.',',')}</span>,
    'Saída' : <span className="movimentacoes-panel__list__item__value movimentacoes-panel__list__item__value--negative">-R$ {valor.replace('.',',')}</span>
  }
  return tipoValores[tipo]
}

export default Valor
