import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './api/Tipos'
import MovimentacoesProvider from './context/Movimentacoes'

import './assets/css/reset.css'
import './assets/css/style.css'

import Header from './components/Header'
import Home from './components/Home'
import Cadastro from './components/Cadastro'
import Edicao from './components/Edicao'
import Error404 from './components/Error404'

function App() {
  return (
    <MovimentacoesProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
          <Route path="/editar/:id">
            <Edicao />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Router>
    </MovimentacoesProvider>
  );
}

export default App;
