/**
 * Nome do Exercício: Pagamento de Funcionário
 * 
 * Descrição: Calcula o pagamento de um funcionário com base nas horas trabalhadas e valor por hora
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
    nome: string;
    valorPorHora: number;
    horasTrabalhadas: number;
}

interface CalculationResults {
    nome: string;
    pagamento: number;
}

function getInputValues(): InputValues {
    return {
        nome: getStringInput('Nome: '),
        valorPorHora: getNumberInput('Valor por hora: '),
        horasTrabalhadas: getIntInput('Horas trabalhadas: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const pagamento = inputs.valorPorHora * inputs.horasTrabalhadas;
    return { nome: inputs.nome, pagamento };
}

function displayResults(results: CalculationResults): void {
    console.log(`O pagamento para ${results.nome} deve ser R$ ${results.pagamento.toFixed(2)}`);
}

function getStringInput(promptMessage: string): string {
    const input = prompt(promptMessage);
    if (input === null || input.trim() === '') throw new Error('Entrada cancelada ou vazia');
    return input.trim();
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
