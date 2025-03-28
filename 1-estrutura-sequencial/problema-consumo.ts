/**
 * Nome do Exercício: Consumo Médio do Carro
 * 
 * Descrição: Calcula o consumo médio de um carro com base na distância percorrida e combustível gasto
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
    distancia: number;
    combustivelGasto: number;
}

interface CalculationResults {
    consumoMedio: number;
}

function getInputValues(): InputValues {
    return {
        distancia: getNumberInput('Distancia percorrida: '),
        combustivelGasto: getNumberInput('Combustível gasto: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const consumoMedio = inputs.distancia / inputs.combustivelGasto;
    return { consumoMedio };
}

function displayResults(results: CalculationResults): void {
    console.log(`Consumo medio = ${results.consumoMedio.toFixed(3)}`);
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