enum Categoria {
  Eletronicos = 'Eletrônicos',
  Vestuario = 'Vestuário',
  Alimentacao = 'Alimentação',
  Livros = 'Livros'
}

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
  categoria: Categoria;
}

const produtos: Produto[] = []

function adicionarProduto(produto: Produto): void {
  produtos.push(produto)
}

function listarProdutos(): Produto[] {
  return produtos
}

function calcularTotal(): number {
  return produtos.reduce((acc, p) => acc + p.preco * p.quantidade, 0)
}

function filtrarPorCategoria(categoria: Categoria): Produto[] {
  return produtos.filter(p => p.categoria === categoria)
}

export {
  Produto,
  Categoria,
  produtos,
  adicionarProduto,
  listarProdutos,
  calcularTotal,
  filtrarPorCategoria
} 