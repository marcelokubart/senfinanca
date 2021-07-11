import React, {useState, useEffect} from 'react'
import CurrencyInput from 'react-currency-masked-input'
import {useParams, useHistory} from "react-router-dom";
import {exibeMovimentacao, editaMovimentacao} from '../../api/Movimentacoes'

const Edicao = ({insereMovimentacao}) => {
  const [data, setData] = useState('')
  const [tipo, setTipo] = useState('')
  const [categoria, setCategoria] = useState('')
  const [titulo, setTitulo] = useState('')
  const [valor, setValor] = useState('')
  const [mensagem, setMensagem] = useState('')

  let history = useHistory()
  const {id} = useParams()

  useEffect(()=>{
    const movimentacao = exibeMovimentacao(id)
    if(movimentacao){
      setData(movimentacao.data)
      setTipo(movimentacao.tipo)
      setCategoria(movimentacao.categoria)
      setTitulo(movimentacao.titulo)
      setValor(movimentacao.valor)
    }
    else
      history.push('/404')
  }, [id])

  function enviaMovimentacao(event){
    event.preventDefault()
    console.log(id, data, tipo, categoria, titulo, valor);
    editaMovimentacao(id, data, tipo, categoria, titulo, valor)
    setMensagem(<span className="movimentacoes-pane__mensagem">Movimentação atualizada com sucesso!</span>)
  }

  return(
    <main className="content principal">
      <section className="box movimentacoes movimentacoes__cadastro">
        <h2 className='box__title box_title--movimentacoes'>Editar Movimentação</h2>
        <div className="panel movimentacoes-panel">
          {mensagem}
          <form className="movimentacoes-cadastro" onSubmit={enviaMovimentacao}>
            <label for="data" className="movimentaces-cadastro__label">Data:*</label>
            <input
              type="text"
              name="data"
              required
              className="movimentacoes-cadastro__input"
              value={data}
              onChange = {(event) => {
                setData(event.target.value)
              }} />
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
              <option value="Benefício">Benefício</option>
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
            <input type="submit" value="Atualizar" className="movimentacoes-cadastro__button" />
          </form>
        </div>
      </section>
    </main>
  )
}

export default Edicao
