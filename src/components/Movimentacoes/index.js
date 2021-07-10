import React from 'react'
import ListaMovimentacoes from '../ListaMovimentacoes'

const Movimentacoes = () => {
  return(
    <section className="box movimentacoes">
      <h2 className='box__title box_title--movimentacoes'>Movimentações</h2>
      <div className="panel movimentacoes-panel">
        <form className="movimentacoes-panel__filter" action="#" method="post">
          <h3 className="movimentacoes-panel__filter__title">Filtrar:</h3>
          <select className="movimentacoes-panel__filter__select" name="" id="">
            <option value="">Movimentação:</option>
            <option value="Entrada">Entrada</option>
            <option value="Saida">Saida</option>
            <option value="">Todas</option>
          </select>
          <select className="movimentacoes-panel__filter__select" name="" id="">
            <option value="">Categoria:</option>
            <option value="">Alimentação</option>
            <option value="">Benefício</option>
            <option value="">Moradia</option>
            <option value="">Renda</option>
            <option value="">Transporte</option>
            <option value="">Outros</option>
            <option value="">Todas</option>
          </select>
        </form>
        <ListaMovimentacoes />
      </div>
    </section>
  )
}

export default Movimentacoes
