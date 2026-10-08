/*
5. Crie duas funções para calcular o total de um carrinho de compras.

Entrada: Lista com os produtos do carrinho, contendo o preço e a quantidade
de cada produto.

Processamento: Primeiro calcular o subtotal de cada produto multiplicando
o preço pela quantidade. Depois somar todos os subtotais para descobrir
o valor total da compra.

Saida: Mostrar o valor total do carrinho.

Eu achei essa questão de dificuldade média, porque tem duas funções que
dependem uma da outra. Meu raciocinio foi primeiro montar o carrinho com
os produtos, depois calcular o subtotal de cada um e por ultimo somar
todos os valores para chegar no total.
*/

function receberCarrinho() {
    const carrinho = []
    let quantidadeProdutos = Number(prompt("Digite quantos produtos terá no carrinho:"))

    for (let i = 0; i < quantidadeProdutos; i++) {
        const produto = {
            preco: Number(prompt(`Digite o preço do ${i + 1}º produto:`)),
            quantidade: Number(prompt(`Digite a quantidade do ${i + 1}º produto:`))
        }

        carrinho.push(produto)
    }

    return carrinho
}

function calcularSubtotalItem(item) {
    let subtotal = item.preco * item.quantidade

    return subtotal
}

function calcularTotalCarrinho(carrinho) {
    let total = 0

    for (let i = 0; i < carrinho.length; i++) {
        total += calcularSubtotalItem(carrinho[i])
    }

    return total
}

function mostrarTotal(total) {
    alert(`O total da compra é R$ ${total}`)
}

let carrinho = receberCarrinho()
let resultado = calcularTotalCarrinho(carrinho)

mostrarTotal(resultado)