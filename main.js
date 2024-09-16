const jogadas = ["pedra", "papel", "tesoura"]

// List Comprehension sendo usado o map() para criar uma nova lista de jogadas.
const listaJogadas = jogadas.map(jogada => jogada)


// Função de Auta ordem que esta recebendo como parametro regraVencedor e a ultilizando para decidir o vencedor.
function decideGanhador(jogador1, jogador2, regraVencedor) {
    return regraVencedor(jogador1, jogador2)
}  

// Função lambda que esta sendo usada de forma anonima (arrowfunction) na função decideGanhador.
const regra = (jogador1, jogador2) => {
    if (jogador1 === jogador2) return "Ninguém ganhou! Deu empate :)"
    if ((jogador1 === "pedra" && jogador2 === "tesoura") || 
        (jogador1 === "tesoura" && jogador2 === "papel") ||
        (jogador1 === "papel" && jogador2 === "pedra")) {
            return "Parabéns! Jogador 1 venceu essa rodada!!!"
        } else {
            return "Parabéns! Jogador 2 venceu essa rodada!!!"
        }
}


// Função que está criando e retornando umna closure
function criarPlacar() {
    let jogador1Vitorias = 0
    let jogador2Vitorias = 0
    // Closure uma função interna que tem acesso as variaveis externas
    return function(vencedor) {
        if (vencedor === "Parabéns! Jogador 1 venceu essa rodada!!!") {
            jogador1Vitorias++
        } else if (vencedor === "Parabéns! Jogador 2 venceu essa rodada!!!") {
            jogador2Vitorias++
        }
        return {jogador1Vitorias, jogador2Vitorias}
    }
}

const atualizarPlacar = criarPlacar()


// função principal para execultar o jogo ela é ativada quando o botão "jogar!" é clicado.
function jogar() {
        const jogador1Escolha = document.getElementById('escolhaJogador1').value.toLowerCase().trim()
        
        if (!listaJogadas.includes(jogador1Escolha)) {
            alert("hm, parece que algo deu errado. Digite novamente.")
            return
        }
        
        const jogador2Escolha = listaJogadas[Math.floor(Math.random() * listaJogadas.length)]
        document.getElementById('escolhaJogador2').innerHTML = `${jogador2Escolha.toUpperCase()}`
        
        const vencedor = decideGanhador(jogador1Escolha, jogador2Escolha, regra)
        document.getElementById('resultado').innerHTML = `${vencedor}`
        
        const {jogador1Vitorias, jogador2Vitorias} = atualizarPlacar(vencedor)   
        document.getElementById('placar').textContent = `${jogador1Vitorias} : ${jogador2Vitorias}`
}


// exportando as duas funções que vão ser testadas.
module.exports = {
    decideGanhador,
    criarPlacar
}