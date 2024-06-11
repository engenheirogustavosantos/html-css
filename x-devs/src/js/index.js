



// OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão 
// anterior da lista

// passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
// passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
// passo 3 - fazer aparecer o cartão anterior da lista
// passo 4 - buscar o cartão que esta selecionado e esconder


// OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo 
// cartao da lista

// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar

const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {

    if (cartaoAtual === cartoes.length - 1) return;
    console.log(cartoes.lenght); 

    // passo 4 - buscar o cartão que esta selecionado e esconder
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

    // passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele
    cartaoAtual++;
    console.log(cartaoAtual);
    cartoes[cartaoAtual].classList.add("selecionado");



});