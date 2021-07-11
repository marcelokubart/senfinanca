import React, {useState, useEffect} from 'react'
import ListaMovimentacoes from '../ListaMovimentacoes'
import {useMovimentacoes} from '../../context/Movimentacoes'

const Movimentacoes = () => {
  const [tipo, setTipo] = useState('Todas')
  const [categoria, setCategoria] = useState('Todas')

  const {atualizaMovimentacoes} = useMovimentacoes()

  useEffect(() => {
    atualizaMovimentacoes(tipo, categoria)
  }, [tipo, categoria])

  return(
    <section className="box movimentacoes">
      <h2 className='box__title box_title--movimentacoes'>Movimentações</h2>
      <div className="panel movimentacoes-panel">
        <form className="movimentacoes-panel__filter" action="#" method="post">
          <h3 className="movimentacoes-panel__filter__title">Filtrar | </h3>
          <label className="movimentacoes-panel__filter__label">Movimentações:
          <select
            className="movimentacoes-panel__filter__select"
            name="tipo"
            id="tipo"
            value={tipo}
            onChange = {(event) => {
              setTipo(event.target.value)
            }}>
            <option value="Todas">Todas</option>
            <option value="Entrada">Entrada</option>
            <option value="Saída">Saída</option>
          </select>
          </label>
          <label className="movimentacoes-panel__filter__label">Categorias:
          <select
            className="movimentacoes-panel__filter__select"
            name="categoria"
            id="categoria"
            value={categoria}
            onChange = {(event) => {
              setCategoria(event.target.value)
            }}>
            <option value="Todas">Todas</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Benefícios">Benefícios</option>
            <option value="Moradia">Moradia</option>
            <option value="Renda">Renda</option>
            <option value="Saúde">Saúde</option>
            <option value="Transporte">Transporte</option>
            <option value="Outros">Outros</option>
          </select>
          </label>

        </form>
        <ListaMovimentacoes />
      </div>
    </section>
  )
}

export default Movimentacoes
