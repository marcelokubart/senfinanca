import React  from 'react'
import {ReactComponent as Erro} from '../../assets/img/error404.svg'

const Error404 = () => {
  return(
    <main className="content principal error404">
      <Erro alt="Erro 400, algo deu errado." className="erro404__imagem" />
    </main>
  )
}

export default Error404
