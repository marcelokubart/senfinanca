const tipos = [
  {
  'id': 'entrada',
  'nome' : 'Entrada',
  'categorias' : ['Renda', 'Benefícios', 'Outros']
  },
  {
  'id': 'saida',
  'nome' : 'Saída',
  'categorias' : ['Alimentação', 'Moradia', 'Saúde', 'Transporte', 'Outros']
  }
]

localStorage.setItem('tipos', JSON.stringify(tipos))
