/**
 * Nome do Exercício: Cálculo de Retângulo
 * 
 * Descrição: Calcula área, perímetro e diagonal de um retângulo
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
    base: number;
    altura: number;
}

interface CalculationResults {
    area: number;
    perimetro: number;
    diagonal: number;
}

function getInputValues(): InputValues {
    return {
        base: getNumberInput('Base do retângulo: '),
        altura: getNumberInput('Altura do retângulo: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const area = inputs.base * inputs.altura;
    const perimetro = 2 * (inputs.base + inputs.altura);
    const diagonal = Math.sqrt(inputs.base ** 2 + inputs.altura ** 2);
    
    return { area, perimetro, diagonal };
}

function displayResults(results: CalculationResults): void {
    console.log(`Área do retângulo: ${results.area.toFixed(4)}`);
    console.log(`Perímetro do retângulo: ${results.perimetro.toFixed(4)}`);
    console.log(`Diagonal do retângulo: ${results.diagonal.toFixed(4)}`);
}

function getNumberInput(promptMessage: string): number {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === '') throw new Error('Entrada cancelada');
    
    const number = parseFloat(input);
    if (isNaN(number)) throw new Error('Valor inválido');
    
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