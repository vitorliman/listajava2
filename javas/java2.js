/*
2. Crie uma função chamada verificarOrcamento que receba dois parametros:
valorProduto e saldoDisponivel.

Entrada: valor do produto e o saldo disponivel.

Processamento: Comparar o valor do produto com o saldo da pessoa para
verificar se ela tem dinheiro suficiente para fazer a compra.

Saida: Mostrar se o saldo é suficiente ou não para comprar o produto.

Eu achei essa questão de dificuldade média, não é tão facil assim porque
alem de fazer a comparação, tem que prestar atenção no retorno da função
e fazer ela retornar true ou false. Meu raciocinio foi separar as funções
para pegar os valores, verificar o orçamento e depois mostrar o resultado.
*/

function pegarValorProduto() {
    let produto = Number(prompt("Digite o valor do produto:"))
    return produto
}

function pegarSaldo() {
    let saldo = Number(prompt("Digite o saldo disponivel:"))
    return saldo
}

function verificarOrcamento(valorProduto, saldoDisponivel) {
    if (saldoDisponivel >= valorProduto) {
        return true
    } else {
        return false
    }
}

function mostrarResultado(resultado) {
    if (resultado == true) {
        alert("O saldo é suficiente para comprar o produto")
    } else {
        alert("O saldo não é suficiente para comprar o produto")
    }
}

let valor = pegarValorProduto()
let saldo = pegarSaldo()

let resultado = verificarOrcamento(valor, saldo)

mostrarResultado(resultado)