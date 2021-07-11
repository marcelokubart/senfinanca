import React, {createContext, useState, useContext} from 'react'
import {exibeSaldo} from '../api/Movimentacoes'

export const SaldoContext = createContext()

export default function SaldoProvider({children}){
  const [saldo, setSaldo] = useState(exibeSaldo())
  const atualizaSaldo = () => {
    setSaldo(exibeSaldo())
  }
  return (
    <SaldoContext.Provider
      value={{
        saldo,
        setSaldo,
        atualizaSaldo
      }}>
      {children}
    </SaldoContext.Provider>)
}


export function useSaldo(){
  const context = useContext(SaldoContext)
  const {saldo, setSaldo, atualizaSaldo} = context
  return {saldo, setSaldo, atualizaSaldo}
}
