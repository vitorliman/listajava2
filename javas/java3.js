/*
3. Crie uma função que apresente um menu ao usuario com opções para
converter real, euro e dolar.

Entrada: A opção escolhida pelo usuario e o valor que ele quer converter.

Processamento: Fazer a conversão de acordo com a opção escolhida e
repetir o menu enquanto o usuario não escolher fechar o programa.

Saida: Mostrar na tela o valor depois da conversão.

Eu achei essa questão de dificuldade média, porque tem mais coisas para
fazer do que nas anteriores. Foi preciso usar o switch para escolher a
opção e tambem fazer o menu aparecer novamente depois de cada conversão.
Meu raciocinio foi colocar as opções dentro de uma função e usar a
repetição para continuar mostrando o menu até escolher sair.
*/

function menuConversao() {

    let opcao = Number(prompt(
        "Escolha uma opção:\n" +
        "1. Converter real para euro\n" +
        "2. Converter euro para real\n" +
        "3. Converter real para dolar\n" +
        "4. Converter dolar para real\n" +
        "5. Fechar o programa"
    ))

    switch (opcao) {

        case 1:
            let valorReal = Number(prompt("Digite o valor em reais:"))
            let valorEuro = valorReal * 5.88

            alert(`O valor convertido é ${valorEuro}`)
            break

        case 2:
            let valorEmEuro = Number(prompt("Digite o valor em euros:"))
            let valorReal2 = valorEmEuro / 5.88

            alert(`O valor convertido é ${valorReal2}`)
            break

        case 3:
            let reais = Number(prompt("Digite o valor em reais:"))
            let valorDolar = reais * 5.23

            alert(`O valor convertido é ${valorDolar}`)
            break

        case 4:
            let dolares = Number(prompt("Digite o valor em dolares:"))
            let valorReal3 = dolares / 5.23

            alert(`O valor convertido é ${valorReal3}`)
            break

        case 5:
            alert("Programa encerrado")
            break

        default:
            alert("Opção invalida")
            break
    }

    if (opcao != 5) {
        menuConversao()
    }
}

menuConversao()