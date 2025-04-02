/**
 * Nome do Exercício: Troco Verificado
 *
 * Descrição: Calcula o troco ou a quantia faltante no pagamento de um produto.
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
    precoUnitario: number;
    quantidade: number;
    valorPago: number;
}

interface CalculationResults {
    troco: number;
    faltante: number;
    suficiente: boolean;
}

function getInputValues(): InputValues {
    return {
        precoUnitario: getNumberInput('Digite o preço unitário do produto: '),
        quantidade: getIntInput('Digite a quantidade comprada: '),
        valorPago: getNumberInput('Digite o valor pago: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const valorTotal = inputs.precoUnitario * inputs.quantidade;
    const troco = inputs.valorPago - valorTotal;
    const suficiente = troco >= 0;
    
    return { troco: suficiente ? troco : 0, faltante: suficiente ? 0 : Math.abs(troco), suficiente };
}

function displayResults(results: CalculationResults): void {
    if (results.suficiente) {
        console.log(`TROCO = R$ ${results.troco.toFixed(2)}`);
    } else {
        console.log(`DINHEIRO INSUFICIENTE. FALTAM R$ ${results.faltante.toFixed(2)}`);
    }
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
