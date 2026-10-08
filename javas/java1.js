/*
1. Crie uma função chamada calcularJurosSimples que receba três parametros:
capital, taxa (em porcentagem) e tempo (em meses).

Entrada: Capital, taxa e tempo.

Processamento: Pegar os valores que o usuario colocou e fazer a conta
dos juros usando a formula: capital * (taxa / 100) * tempo.

Saida: Mostrar na tela o valor dos juros calculados.

Eu achei essa questão facil, porque a formula ja estava no enunciado.
Meu raciocinio foi primeiro pegar os valores, depois fazer o calculo
em uma função e por ultimo mostrar o resultado.
*/

function pegarDados() {
    const dados = []

    let capital = Number(prompt("Informe o capital inicial:"))
    let taxa = Number(prompt("Informe a taxa em porcentagem:"))
    let tempo = Number(prompt("Informe o tempo em meses:"))

    dados.push(capital, taxa, tempo)

    return dados
}

function calcularJurosSimples(capital, taxa, tempo) {
    let juros = capital * (taxa / 100) * tempo

    return juros
}

function exibirResultado(juros) {
    alert(`O valor dos juros é R$ ${juros}`)
}

let dados = pegarDados()
let jurosCalculados = calcularJurosSimples(dados[0], dados[1], dados[2])

exibirResultado(jurosCalculados)