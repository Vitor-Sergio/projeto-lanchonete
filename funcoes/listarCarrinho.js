function listarCarrinho(carrinho) {
  if (carrinho.length === 0) {
    console.log("Carrinho vazio!");
    return;
  }

  for (let i = 0; i < carrinho.length; i++) {
    console.log(i + 1, "-", carrinho[i].nome, "- R$", carrinho[i].preco);
  }
}

module.exports = listarCarrinho;