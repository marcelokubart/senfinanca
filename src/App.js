import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './api/Tipos'
import {insereMovimentacao} from './api/Movimentacoes'

import './assets/css/reset.css'
import './assets/css/style.css'

import Header from './components/Header'
import Home from './components/Home'
import Cadastro from './components/Cadastro'
import Error404 from './components/Error404'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cadastro">
          <Cadastro insereMovimentacao={insereMovimentacao} />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
