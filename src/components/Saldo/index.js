import React, {useState} from 'react'
import {exibeSaldo} from '../../api/Movimentacoes'

const Saldo = () => {
  const [saldo, setSaldo] = useState(exibeSaldo())
  return (
    <section className="box saldo">
      <h2 className='box__title box_title--saldo'>Saldo</h2>
      <div className="panel panel-saldo">
        <ul>
          <li className="panel-saldo__item panel-saldo__item--entrada"><span className="panel-saldo__item__destaque">Entradas:</span> R$ {saldo.entradas.replace('.',',')}</li>
          <li className="panel-saldo__item panel-saldo__item--saida"><span className="panel-saldo__item__destaque">Saídas:</span> {saldo.saidas.replace('.',',')}</li>
          <li className="panel-saldo__item panel-saldo__item--total"><strong>Total: R$ {saldo.total.replace('.',',')}</strong></li>
        </ul>
      </div>
    </section>
  );
}

export default Saldo
