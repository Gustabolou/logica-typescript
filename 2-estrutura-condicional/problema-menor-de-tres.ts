/**
 * Nome do Exercício: Menor de Três
 *
 * Descrição: Lê três números inteiros e exibe o menor deles.
 */

function main(): void {
    try {
        const inputValues = getInputValues();
        const result = calculateResults(inputValues);
        displayResults(result);
    } catch (error) {
        handleError(error);
    }
}

interface InputValues {
    num1: number;
    num2: number;
    num3: number;
}

interface CalculationResults {
    menor: number;
}

function getInputValues(): InputValues {
    return {
        num1: getIntInput('Digite o primeiro número: '),
        num2: getIntInput('Digite o segundo número: '),
        num3: getIntInput('Digite o terceiro número: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const menor = Math.min(inputs.num1, inputs.num2, inputs.num3);
    return { menor };
}

function displayResults(results: CalculationResults): void {
    console.log(`MENOR = ${results.menor}`);
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