export function insereMovimentacao(data, tipo, categoria, titulo, valor){
  const movimentacoes = JSON.parse(localStorage.getItem('movimentacoes')) || []
  const dataOptions = {year: 'numeric', month: 'numeric', day: 'numeric' }
  data = data.toLocaleDateString("pt-BR", dataOptions)

  const movimentacao = {
    data,
    tipo,
    categoria,
    titulo,
    valor
  }

  const tarefasAtualizadas = [...movimentacoes, movimentacao]
  localStorage.setItem('movimentacoes', JSON.stringify(tarefasAtualizadas))
}

export function exibeMovimentacoes(tipo, categoria){
  const movimentacoes = JSON.parse(localStorage.getItem('movimentacoes')) || []
  let movimentacoesFiltradas = []

  if ((!tipo && !categoria) || (tipo === 'Todas' && categoria === 'Todas')){
    return movimentacoes
  }
  else{
    if(tipo !== 'Todas' && categoria === 'Todas'){
      console.log('entrei');
      movimentacoes.forEach((movimentacao) => {
        if(movimentacao.tipo === tipo)
        movimentacoesFiltradas.push(movimentacao)
      })
    }
    else if(categoria !== 'Todas' && tipo === 'Todas'){
      movimentacoes.forEach((movimentacao) => {
        if(movimentacao.categoria === categoria)
        movimentacoesFiltradas.push(movimentacao)
      })
    }
    else(
      movimentacoes.forEach((movimentacao) => {
        if(movimentacao.categoria === categoria && movimentacao.tipo === tipo)
          movimentacoesFiltradas.push(movimentacao)
      })
    )
    return movimentacoesFiltradas
  }
}

export function exibeMovimentacao(id){
  const movimentacoes = JSON.parse(localStorage.getItem('movimentacoes'))
  return movimentacoes[id]
}

export function editaMovimentacao(id, data, tipo, categoria, titulo, valor){
  const movimentacoes = JSON.parse(localStorage.getItem('movimentacoes'))
  movimentacoes[id] = {data, tipo, categoria, titulo, valor}

  localStorage.setItem('movimentacoes', JSON.stringify(movimentacoes))
}

export function deletaMovimentacao(id) {
  const movimentacoes = JSON.parse(localStorage.getItem('movimentacoes'))
  movimentacoes.splice(id, 1)
  localStorage.setItem('movimentacoes', JSON.stringify(movimentacoes))
}

export function exibeSaldo(){
  const movimentacoes = JSON.parse(localStorage.getItem('movimentacoes')) || []
  let entradas = 0
  let saidas = 0
  movimentacoes.forEach((movimentacao) => {
    if(movimentacao.tipo === "Entrada")
    entradas += parseFloat(movimentacao.valor)
    else
    saidas += parseFloat(movimentacao.valor)
  })
  entradas = entradas.toFixed(2)
  saidas = saidas.toFixed(2)

  let total = entradas - saidas


  total = total.toFixed(2)

  return {entradas, saidas, total}
}
