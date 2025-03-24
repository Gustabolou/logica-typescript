/**
 * Nome do Exercício: Cálculo de Área e Valor de Terreno
 * 
 * Descrição: Calcula a área de um terreno e seu valor total baseado no preço por m²
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
    largura: number;
    comprimento: number;
    valorM2: number;
}

interface CalculationResults {
    area: number;
    valorTotal: number;
}

function getInputValues(): InputValues {
    return {
        largura: getNumberInput('Digite a largura do terreno (m): '),
        comprimento: getNumberInput('Digite o comprimento do terreno (m): '),
        valorM2: getNumberInput('Digite o valor do metro quadrado (R$): ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const area = inputs.largura * inputs.comprimento;
    const valorTotal = area * inputs.valorM2;
    
    return { area, valorTotal };
}

function displayResults(results: CalculationResults): void {
    console.log(`Área do terreno: ${results.area.toFixed(2)} m²`);
    console.log(`Valor total do terreno: R$ ${results.valorTotal.toFixed(2)}`);
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