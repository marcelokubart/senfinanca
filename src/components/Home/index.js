import React from 'react'
import Saldo from '../Saldo'
import Movimentacoes from '../Movimentacoes'

const Home = () => {
  return(
    <main class="content principal">
      <Saldo />
      <Movimentacoes />
    </main>
  )
}

export default Home
