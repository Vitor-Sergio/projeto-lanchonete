function removerItem(prompt, carrinho) {
  if (carrinho.length === 0) {
    console.log("Carrinho vazio!");
    return;
  }

  for (let i = 0; i < carrinho.length; i++) {
    console.log(i + 1, "-", carrinho[i].nome, "- R$", carrinho[i].preco);
  }

  let indiceRemover = Number(prompt("Qual item você deseja remover? "));
  let indice = indiceRemover - 1;

  if (indice >= 0 && indice < carrinho.length) {
    carrinho.splice(indice, 1);
  } else {
    console.log("Item inválido!");
  }
}

module.exports = removerItem;