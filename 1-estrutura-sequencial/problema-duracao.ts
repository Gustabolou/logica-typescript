/**
 * Nome do Exercício: Duração do Tempo
 *
 * Descrição: Converte uma duração em segundos para o formato horas:minutos:segundos.
 */

function main(): void {
    try {
        const inputValues = getInputValues();
        const results = calculateResults(inputValues);
        displayResults(results);
    } catch (error) {
        handleError(error);
    }
}

interface InputValues {
    duracaoSegundos: number;
}

interface CalculationResults {
    horas: number;
    minutos: number;
    segundos: number;
}

function getInputValues(): InputValues {
    return {
        duracaoSegundos: getIntInput('Digite a duração em segundos: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const horas = Math.floor(inputs.duracaoSegundos / 3600);
    const minutos = Math.floor((inputs.duracaoSegundos % 3600) / 60);
    const segundos = inputs.duracaoSegundos % 60;
    return { horas, minutos, segundos };
}

function displayResults(results: CalculationResults): void {
    console.log(`${results.horas}:${results.minutos}:${results.segundos}`);
}

function getIntInput(promptMessage: string): number {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === '') throw new Error('Entrada cancelada');

    const number = parseInt(input);
    if (isNaN(number)) throw new Error('Valor inválido. Digite um número inteiro.');

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
