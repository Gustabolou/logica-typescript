/**
 * Nome do Exercício: Cálculo de Média de Idades
 * 
 * Descrição: Lê o nome e idade de duas pessoas e calcula a média das idades
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

interface Pessoa {
    nome: string;
    idade: number;
}

interface InputValues {
    pessoa1: Pessoa;
    pessoa2: Pessoa;
}

interface CalculationResults {
    pessoa1: Pessoa;
    pessoa2: Pessoa;
    mediaIdades: number;
}

function getInputValues(): InputValues {
    return {
        pessoa1: {
            nome: getStringInput('Nome da primeira pessoa: '),
            idade: getNumberInput('Idade da primeira pessoa: ')
        },
        pessoa2: {
            nome: getStringInput('Nome da segunda pessoa: '),
            idade: getNumberInput('Idade da segunda pessoa: ')
        }
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const mediaIdades = (inputs.pessoa1.idade + inputs.pessoa2.idade) / 2;
    
    return {
        pessoa1: inputs.pessoa1,
        pessoa2: inputs.pessoa2,
        mediaIdades
    };
}

function displayResults(results: CalculationResults): void {
    console.log(`\nResultados:`);
    console.log(`- ${results.pessoa1.nome}, ${results.pessoa1.idade} anos`);
    console.log(`- ${results.pessoa2.nome}, ${results.pessoa2.idade} anos`);
    console.log(`- Média das idades: ${results.mediaIdades.toFixed(1)} anos`);
}

function getNumberInput(promptMessage: string): number {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === '') throw new Error('Entrada cancelada');
    
    const number = parseFloat(input);
    if (isNaN(number)) throw new Error('Valor inválido. Digite um número.');
    
    return number;
}

function getStringInput(promptMessage: string): string {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === '') throw new Error('Entrada cancelada');
    
    return input;
}

function handleError(error: unknown): void {
    if (error instanceof Error) {
        console.error(`Erro: ${error.message}`);
    } else {
        console.error('Ocorreu um erro desconhecido');
    }
}

main();
