const prompt = require("prompt-sync")();

const cardapio = require("./cardapio");
const carrinho = require("./carrinho");

const adicionarItem = require("./funcoes/adicionarItem");
const removerItem = require("./funcoes/removerItem");
const listarCarrinho = require("./funcoes/listarCarrinho");
const somaTotal = require("./funcoes/somaTotal");

function exibirMenu() {
  while (true) {
    console.log("\nSistema de Pedidos");
    console.log("1 - Cardápio");
    console.log("2 - Adicionar item");
    console.log("3 - Ver carrinho");
    console.log("4 - Remover item");
    console.log("5 - Finalizar pedido");
    console.log("6 - Sair");

    let opcao = prompt("Digite uma opção: ");

    if (opcao == 1) {
      console.log(cardapio);

    } else if (opcao == 2) {
      adicionarItem(prompt, cardapio, carrinho);

    } else if (opcao == 3) {
      listarCarrinho(carrinho);

    } else if (opcao == 4) {
      removerItem(prompt, carrinho);

    } else if (opcao == 5) {
      console.log(carrinho);
      console.log("Total da conta: R$", somaTotal(carrinho));

      let finalizar = prompt("Finalizar pedido? 1-sim 2-nao: ");

      if (finalizar == 1) {
        console.log("Pedido aceito! Obrigado pela preferência.");
        break;
      }

    } else if (opcao == 6) {
      console.log("Volte sempre!");
      break;

    } else {
      console.log("Opção inválida!");
    }
  }
}

exibirMenu();