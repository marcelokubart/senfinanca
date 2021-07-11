import React, {createContext, useState, useContext} from 'react'
import {exibeSaldo, exibeMovimentacoes} from '../api/Movimentacoes'

export const MovimentacoesContext = createContext()

export default function MovimentacoesProvider({children}){
  const [saldo, setSaldo] = useState(exibeSaldo())
  const [movimentacoes, setMovimentacoes] = useState(exibeMovimentacoes())

  const atualizaSaldo = () => {
    setSaldo(exibeSaldo())
  }

  const atualizaMovimentacoes = (tipo, categoria) => {
    setMovimentacoes(exibeMovimentacoes(tipo, categoria))
  }

  return (
    <MovimentacoesContext.Provider
      value={{
        saldo,
        setSaldo,
        atualizaSaldo,
        movimentacoes,
        setMovimentacoes,
        atualizaMovimentacoes
      }}>
      {children}
    </MovimentacoesContext.Provider>)
}


export function useSaldo(){
  const context = useContext(MovimentacoesContext)
  const {saldo, setSaldo, atualizaSaldo} = context
  return {saldo, setSaldo, atualizaSaldo}
}

export function useMovimentacoes(){
  const context = useContext(MovimentacoesContext)
  const {movimentacoes, setMovimentacoes, atualizaMovimentacoes} = context
  return {movimentacoes, setMovimentacoes, atualizaMovimentacoes}
}
