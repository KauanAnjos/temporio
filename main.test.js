const { decideGanhador, criarPlacar } = require('./main'); // Importar as funções do arquivo principal

describe('Teste de lógica do jogo Pedra, Papel e Tesoura', () => {
    
    test('Jogador 1 vence com Pedra vs Tesoura', () => {
        const resultado = decideGanhador('pedra', 'tesoura', (jogador1, jogador2) => {
            if (jogador1 === jogador2) return "Ninguém ganhou! Deu empate :)";
            if ((jogador1 === "pedra" && jogador2 === "tesoura") ||
                (jogador1 === "tesoura" && jogador2 === "papel") ||
                (jogador1 === "papel" && jogador2 === "pedra")) {
                return "Parabéns! Você venceu essa rodada!!!";
            } else {
                return "Parabéns! Jogador 2 essa rodada venceu!!!";
            }
        });
        expect(resultado).toBe("Parabéns! Você venceu essa rodada!!!");
    });

    test('Empate com Pedra vs Pedra', () => {
        const resultado = decideGanhador('pedra', 'pedra', (jogador1, jogador2) => {
            if (jogador1 === jogador2) return "Ninguém ganhou! Deu empate :)";
            if ((jogador1 === "pedra" && jogador2 === "tesoura") ||
                (jogador1 === "tesoura" && jogador2 === "papel") ||
                (jogador1 === "papel" && jogador2 === "pedra")) {
                return "Parabéns! Você venceu essa rodada!!!";
            } else {
                return "Parabéns! Jogador 2 essa rodada venceu!!!";
            }
        });
        expect(resultado).toBe("Ninguém ganhou! Deu empate :)");
    });

    test('Jogador 2 vence com Papel vs Tesoura', () => {
        const resultado = decideGanhador('papel', 'tesoura', (jogador1, jogador2) => {
            if (jogador1 === jogador2) return "Ninguém ganhou! Deu empate :)";
            if ((jogador1 === "pedra" && jogador2 === "tesoura") ||
                (jogador1 === "tesoura" && jogador2 === "papel") ||
                (jogador1 === "papel" && jogador2 === "pedra")) {
                return "Parabéns! Você venceu essa rodada!!!";
            } else {
                return "Parabéns! Jogador 2 essa rodada venceu!!!";
            }
        });
        expect(resultado).toBe("Parabéns! Jogador 2 essa rodada venceu!!!");
    });
});

describe('Teste da função de placar', () => {
    
    test('Jogador 1 vence e o placar é atualizado corretamente', () => {
        const atualizarPlacar = criarPlacar();
        atualizarPlacar('Parabéns! Jogador 1 venceu essa rodada!!!');
        const { jogador1Vitorias, jogador2Vitorias } = atualizarPlacar('');
        expect(jogador1Vitorias).toBe(1);
        expect(jogador2Vitorias).toBe(0);
    });

    test('Jogador 2 vence e o placar é atualizado corretamente', () => {
        const atualizarPlacar = criarPlacar();
        atualizarPlacar('Parabéns! Jogador 2 venceu essa rodada!!!');
        const { jogador1Vitorias, jogador2Vitorias } = atualizarPlacar('');
        expect(jogador1Vitorias).toBe(0);
        expect(jogador2Vitorias).toBe(1);
    });

    test('Empate não altera o placar', () => {
        const atualizarPlacar = criarPlacar();
        atualizarPlacar('Ninguém ganhou! Deu empate :)');
        const { jogador1Vitorias, jogador2Vitorias } = atualizarPlacar('');
        expect(jogador1Vitorias).toBe(0);
        expect(jogador2Vitorias).toBe(0);
    });
});
