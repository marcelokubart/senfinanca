import React from 'react'
import alimentacao from '../../assets/img/icon-cat-alimentacao.svg'
import beneficios from '../../assets/img/icon-cat-beneficios.svg'
import moradia from '../../assets/img/icon-cat-moradia.svg'
import renda from '../../assets/img/icon-cat-renda.svg'
import saude from '../../assets/img/icon-cat-saude.svg'
import transporte from '../../assets/img/icon-cat-transporte.svg'
import outros from '../../assets/img/icon-cat-outros.svg'

export default (type) => {
  const Images = {
    'Alimentação': <img src={alimentacao} alt="Alimentação" />,
    'Benefícios': <img src={beneficios} alt="Benefícios" />,
    'Moradia': <img src={moradia} alt="Moradia" />,
    'Renda' : <img src={renda} alt="Renda" />,
    'Saúde': <img src={saude} alt="Saude" />,
    'Transporte': <img src={transporte} alt="Transporte" />,
    default: <img src={outros} alt="Outros" />,
  }

  return Images[type] || Images.default
}
