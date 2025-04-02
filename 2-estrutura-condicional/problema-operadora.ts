/**
 * Nome do Exercício: Operadora
 *
 * Descrição: Calcula o valor da conta telefônica com base nos minutos utilizados.
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
    minutos: number;
}

interface CalculationResults {
    valorTotal: number;
}

function getInputValues(): InputValues {
    return {
        minutos: getIntInput('Digite a quantidade de minutos utilizados: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const planoBasico = 50.00;
    const minutosInclusos = 100;
    const custoExcedente = 2.00;
    
    let valorTotal = planoBasico;
    if (inputs.minutos > minutosInclusos) {
        valorTotal += (inputs.minutos - minutosInclusos) * custoExcedente;
    }
    
    return { valorTotal };
}

function displayResults(results: CalculationResults): void {
    console.log(`Valor a pagar: R$ ${results.valorTotal.toFixed(2)}`);
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


