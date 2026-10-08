/*
6. Crie duas funções para gerenciar a fila de reprodução de uma playlist.

Entrada: Lista de músicas contendo titulo, minutos e segundos.

Processamento: Converter o tempo de cada musica para segundos e depois
somar o tempo de todas elas para descobrir a duração total da playlist.

Saida: Mostrar o tempo total da playlist em segundos.

Eu achei essa questão de dificuldade média, porque tem que trabalhar com
uma lista de objetos e usar uma função dentro da outra. Meu raciocinio
foi primeiro pegar as informações de cada musica, depois converter o
tempo delas para segundos e por fim somar todos os tempos.
*/

function receberPlaylist() {
    const playlist = []
    let quantidadeMusicas = Number(prompt("Digite a quantidade de musicas na playlist:"))

    for (let i = 0; i < quantidadeMusicas; i++) {
        const musica = {
            titulo: prompt(`Digite o titulo da ${i + 1}ª musica:`),
            minutos: Number(prompt(`Digite os minutos da ${i + 1}ª musica:`)),
            segundos: Number(prompt(`Digite os segundos da ${i + 1}ª musica:`))
        }

        playlist.push(musica)
    }

    return playlist
}

function converterParaSegundos(minutos, segundos) {
    let totalSegundos = (minutos * 60) + segundos

    return totalSegundos
}

function calcularTempoPlaylist(playlist) {
    let tempoTotal = 0

    for (let i = 0; i < playlist.length; i++) {
        tempoTotal += converterParaSegundos(
            playlist[i].minutos,
            playlist[i].segundos
        )
    }

    return tempoTotal
}

function mostrarResultado(tempo) {
    alert(`O tempo total da playlist em segundos é de ${tempo} segundos!`)
}

let playlist = receberPlaylist()
let resultado = calcularTempoPlaylist(playlist)

mostrarResultado(resultado)