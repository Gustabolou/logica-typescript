/**
 * Nome do Exercício: Cálculo de Área do Círculo
 * 
 * Descrição: Calcula a área de um círculo com base no raio fornecido
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
    raio: number;
}

interface CalculationResults {
    area: number;
}

function getInputValues(): InputValues {
    return {
        raio: getPositiveNumberInput('Digite o raio do círculo: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const area = Math.PI * Math.pow(inputs.raio, 2);
    return { area };
}

function displayResults(results: CalculationResults): void {
    console.log(`Área do círculo: ${results.area.toFixed(3)}`);
}

function getPositiveNumberInput(promptMessage: string): number {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === '') {
        throw new Error('Entrada cancelada ou vazia');
    }
    
    const number = parseFloat(input);
    if (isNaN(number)) {
        throw new Error('Valor inválido. Digite um número.');
    }
    
    if (number <= 0) {
        throw new Error('O raio deve ser um valor positivo.');
    }
    
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