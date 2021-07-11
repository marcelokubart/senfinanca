import React, {useState} from 'react'
import {insereMovimentacao} from '../../api/Movimentacoes'
import CurrencyInput from 'react-currency-masked-input'

const Cadastro = () => {
  const [tipo, setTipo] = useState('Entrada')
  const [categoria, setCategoria] = useState('Alimentação')
  const [titulo, setTitulo] = useState('')
  const [valor, setValor] = useState('')
  const [mensagem, setMensagem] = useState('')

  function enviaMovimentacao(event){
    event.preventDefault()
    const dataAtual = new Date()
    insereMovimentacao(dataAtual, tipo, categoria, titulo, valor)
    setTitulo('')
    setValor('')
    setMensagem(<span className="movimentacoes-pane__mensagem">Movimentação adicionada com sucesso!</span>)
  }

  return(
    <main className="content principal">
      <section className="box movimentacoes movimentacoes__cadastro">
        <h2 className='box__title box_title--movimentacoes'>Inserir Movimentação</h2>
        <div className="panel movimentacoes-panel">
          {mensagem}
          <form className="movimentacoes-cadastro" onSubmit={enviaMovimentacao}>
            <label for="tipo" className="movimentaces-cadastro__label">Tipo:</label>
            <select
              className="movimentaces-cadastro__select"
              name="tipo"
              id="tipo"
              value={tipo}
              onChange = {(event) => {
                setTipo(event.target.value)
              }}>
              <option value="Entrada">Entrada</option>
              <option value="Saída">Saída</option>
            </select>
            <label for="categoria" className="movimentaces-cadastro__label">Categoria:</label>
            <select
              className="movimentaces-cadastro__select"
              name="categoria"
              id="categoria"
              value={categoria}
              onChange = {(event) => {
                setCategoria(event.target.value)
              }}>
              <option value="Alimentação">Alimentação</option>
              <option value="Benefícios">Benefícios</option>
              <option value="Moradia">Moradia</option>
              <option value="Renda">Renda</option>
              <option value="Saúde">Saúde</option>
              <option value="Transporte">Transporte</option>
              <option value="Outros">Outros</option>
            </select>
            <label for="titulo" className="movimentaces-cadastro__label">Título:*</label>
            <input
              type="text"
              name="titulo"
              required
              className="movimentacoes-cadastro__input"
              value={titulo}
              onChange = {(event) => {
                setTitulo(event.target.value)
              }} />
            <label for="valor" className="movimentaces-cadastro__label">Valor:*</label>
            <CurrencyInput
              name="valor"
              separator="."
              required
              className="movimentacoes-cadastro__input"
              value={valor}
              onChange = {(event) => {
                setValor(event.target.value)
              }}/>
            <input type="submit" value="Cadastrar" className="movimentacoes-cadastro__button" />
          </form>
        </div>
      </section>
    </main>
  )
}

export default Cadastro
