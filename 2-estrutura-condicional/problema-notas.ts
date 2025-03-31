/**
 * Nome do Exercício: Cálculo de Notas
 *
 * Descrição: Calcula a nota final de um aluno e verifica se ele foi aprovado ou reprovado.
 */

function main(): void {
    try {
        const notas = getNotas();
        const notaFinal = calcularNotaFinal(notas);
        exibirResultado(notaFinal);
    } catch (error) {
        handleError(error);
    }
}

interface Notas {
    nota1: number;
    nota2: number;
}

function getNotas(): Notas {
    return {
        nota1: getNumberInput('Digite a primeira nota: '),
        nota2: getNumberInput('Digite a segunda nota: ')
    };
}

function calcularNotaFinal(notas: Notas): number {
    return notas.nota1 + notas.nota2;
}

function exibirResultado(notaFinal: number): void {
    console.log(`NOTA FINAL = ${notaFinal.toFixed(1)}`);
    if (notaFinal < 60.0) {
        console.log('REPROVADO');
    }
}

function getNumberInput(promptMessage: string): number {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === '') throw new Error('Entrada cancelada');

    const number = parseFloat(input);
    if (isNaN(number)) throw new Error('Valor inválido. Digite um número.');

    return number;
}

function handleError(error: unknown): void {
    if (error instanceof Error) {
        console.error(`Erro: ${error.message}`);
    } else {
        console.error('Ocorreu um erro desconhecido');
    }
}

main();