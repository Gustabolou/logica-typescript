/**
 * Nome do Exercício: Soma de Valores
 * 
 * Descrição: Lê dois valores inteiros e mostra a soma
 * 
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
    x: number;
    y: number;
}

interface CalculationResults {
    soma: number;
}

function getInputValues(): InputValues {
    return {
        x: getIntInput('Digite o valor de X: '),
        y: getIntInput('Digite o valor de Y: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const soma = inputs.x + inputs.y;
    return { soma };
}

function displayResults(results: CalculationResults): void {
    console.log(`Soma: ${results.soma}`);
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