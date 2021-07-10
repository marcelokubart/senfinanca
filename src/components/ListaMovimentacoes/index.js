import React, {useState} from 'react'
import iconeEdit from '../../assets/img/icon-edit.svg'
import iconDelete from '../../assets/img/icon-delete.svg'
import {exibeMovimentacoes} from '../../api/Movimentacoes'
import ImageFilter from '../ImageFilter'
import Valor from '../Valor'

const ListaMovimentacoes = () => {
  const [movimentacoes, setMovimentacoes] = useState(exibeMovimentacoes())
  return(
    <ul className="movimentacoes-panel__list">
      {movimentacoes.map((movimentacao, index) => (
        <li className="movimentacoes-panel__list__item" key={index}>
          <span className="movimentacoes-panel__list__item__icon">
            {ImageFilter(movimentacao.categoria)}
          </span>
          <div className="movimentacoes-panel__list__item__info">
            <span className="movimentacoes-panel__list_item_info_data">{movimentacao.data}</span>
            <span className="movimentacoes-panel__list_item_info_category">{movimentacao.categoria}</span>
            <span className="movimentacoes-panel__list_item_info_title">{movimentacao.titulo}</span>
          </div>
          <Valor tipo={movimentacao.tipo} valor={movimentacao.valor} />
          <span className="movimentacoes-panel__list__item__actions">
            <a href={`/editar?id=${index}`} className="movivencoes-panel__list__item__actions__button"><img src={iconeEdit} alt="Editar" /></a>
            <a href="#" className="movivencoes-panel__list__item__actions__button"><img src={iconDelete} alt="Excluir" /></a>
          </span>
        </li>
      ))
      }
    </ul>
  )
}

export default ListaMovimentacoes
