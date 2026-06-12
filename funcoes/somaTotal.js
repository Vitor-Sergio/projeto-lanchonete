function somaTotal(carrinho) {
  let soma = 0;

  for (let i = 0; i < carrinho.length; i++) {
    soma += carrinho[i].preco;
  }

  return soma;
}

module.exports = somaTotal;