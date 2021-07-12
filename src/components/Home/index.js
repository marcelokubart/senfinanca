import React from 'react'
import Saldo from '../Saldo'
import Movimentacoes from '../Movimentacoes'

const Home = () => {
  return(
    <main className="content principal">
      <Saldo />
      <Movimentacoes />
    </main>
  )
}

export default Home
