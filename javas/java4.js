/*
4. Crie uma função chamada exibirResumoProduto que receba um objeto
com nome, preco e quantidade.

Entrada: Nome do produto, preço e quantidade em estoque.

Processamento: Montar uma frase usando os dados que foram colocados
dentro do objeto.

Saida: Mostrar o resumo do produto com todas as informações.

Eu achei essa questão muito facil, porque não teve muito calculo ou
comparação. Meu raciocinio foi criar o objeto com as informações do
produto, depois passar ele para uma função que organiza os dados em
uma string e por fim mostrar essa mensagem.
*/

function pegarProduto() {
    const produto = {
        nome: prompt("Digite o nome do produto:"),
        preco: Number(prompt("Digite o preço do produto:")),
        quantidade: Number(prompt("Digite a quantidade em estoque:"))
    }

    return produto
}

function exibirResumoProduto(produto) {
    return `Produto: ${produto.nome} | Preço: R$ ${produto.preco} | Estoque: ${produto.quantidade} unidades.`
}

let produto = pegarProduto()
let resumo = exibirResumoProduto(produto)

alert(resumo)