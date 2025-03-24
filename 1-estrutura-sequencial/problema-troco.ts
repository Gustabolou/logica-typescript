/**
 * Nome do Exercício: Cálculo de Troco
 * 
 * Descrição: Calcula o troco a ser devolvido ao cliente
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
    precoUnitario: number;
    quantidade: number;
    valorPago: number;
}

interface CalculationResults {
    troco: number;
}

function getInputValues(): InputValues {
    return {
        precoUnitario: getNumberInput('Preço unitário do produto: '),
        quantidade: getIntInput('Quantidade comprada: '),
        valorPago: getNumberInput('Dinheiro recebido: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const valorTotal = inputs.precoUnitario * inputs.quantidade;
    const troco = inputs.valorPago - valorTotal; // Corrigido para valorPago - valorTotal
    
    return { troco };
}

function displayResults(results: CalculationResults): void {
    console.log(`TROCO = R$ ${results.troco.toFixed(2)}`);
}

function getNumberInput(promptMessage: string): number {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === '') throw new Error('Entrada cancelada');
    
    const number = parseFloat(input);
    if (isNaN(number)) throw new Error('Valor inválido. Digite um número.');
    
    return number;
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