import {
  Categoria,
  Produto,
  adicionarProduto,
  listarProdutos,
  calcularTotal,
  filtrarPorCategoria
} from './produtos.js'

adicionarProduto({ nome: 'Notebook', preco: 3000, quantidade: 2, categoria: Categoria.Eletronicos })
adicionarProduto({ nome: 'Camiseta', preco: 50, quantidade: 5, categoria: Categoria.Vestuario })
adicionarProduto({ nome: 'Fone de Ouvido', preco: 200, quantidade: 3, categoria: Categoria.Eletronicos })

console.log('Todos os produtos:')
console.log(listarProdutos())

console.log('\nTotal em estoque:')
console.log(calcularTotal())

console.log('\nFiltrar por Eletrônicos:')
console.log(filtrarPorCategoria(Categoria.Eletronicos)) 