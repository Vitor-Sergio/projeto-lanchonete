function adicionarItem(prompt, cardapio, carrinho) {
  console.log("1 - hambúrgueres");
  console.log("2 - bebidas");
  console.log("3 - acompanhamentos");
  console.log("4 - sobremesas");

  let opcao = prompt("O que você deseja? ");
  let opcPedido;

  if (opcao == 1) {
    console.log(cardapio.hamburgueres);
    opcPedido = prompt("Qual hambúrguer você deseja? ");
    carrinho.push(cardapio.hamburgueres[opcPedido]);

  } else if (opcao == 2) {
    console.log(cardapio.bebidas);
    opcPedido = prompt("Qual bebida você deseja? ");
    carrinho.push(cardapio.bebidas[opcPedido]);

  } else if (opcao == 3) {
    console.log(cardapio.acompanhamentos);
    opcPedido = prompt("Qual acompanhamento você deseja? ");
    carrinho.push(cardapio.acompanhamentos[opcPedido]);

  } else if (opcao == 4) {
    console.log(cardapio.sobremesa);
    opcPedido = prompt("Qual sobremesa você deseja? ");
    carrinho.push(cardapio.sobremesa[opcPedido]);

  } else {
    console.log("Opção inválida!");
  }
}

module.exports = adicionarItem;