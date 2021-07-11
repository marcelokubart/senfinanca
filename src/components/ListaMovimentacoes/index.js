import React, {useState, useEffect} from 'react'
import {useSaldo} from '../../context/Saldo'
import {Link} from "react-router-dom";
import iconeEdit from '../../assets/img/icon-edit.svg'
import iconDelete from '../../assets/img/icon-delete.svg'
import {exibeMovimentacoes, deletaMovimentacao, exibeSaldo} from '../../api/Movimentacoes'
import ImageFilter from '../ImageFilter'
import Valor from '../Valor'

const ListaMovimentacoes = () => {
  const [movimentacoes, setMovimentacoes] = useState(exibeMovimentacoes())

  const {atualizaSaldo} = useSaldo();

  function handleDelete(id){
    deletaMovimentacao(id)
    setMovimentacoes(exibeMovimentacoes())
    atualizaSaldo()
  }

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
            <Link to={`/editar/${index}`} className="movivencoes-panel__list__item__actions__button"><img src={iconeEdit} alt="Editar" /></Link>
            <a href="#"
              className="movivencoes-panel__list__item__actions__button"
              onClick={(event) =>{
                  handleDelete(event.target.dataset.id)
                }
              }><img src={iconDelete} alt="Excluir" data-id={index} /></a>
          </span>
        </li>
      ))
      }
    </ul>
  )
}

export default ListaMovimentacoes
