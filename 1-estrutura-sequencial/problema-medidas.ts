/**
 * Nome do Exercício: Cálculo de Áreas
 * 
 * Descrição: Calcula áreas de diferentes formas geométricas com base nas medidas fornecidas
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
    medidaA: number;
    medidaB: number;
    medidaC: number;
}

interface CalculationResults {
    areaQuadrado: number;
    areaTriangulo: number;
    areaTrapezio: number;
}

function getInputValues(): InputValues {
    return {
        medidaA: getNumberInput('Digite a medida A: '),
        medidaB: getNumberInput('Digite a medida B: '),
        medidaC: getNumberInput('Digite a medida C: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const areaQuadrado = inputs.medidaA ** 2;
    const areaTriangulo = (inputs.medidaA * inputs.medidaB) / 2;
    const areaTrapezio = ((inputs.medidaA + inputs.medidaB) * inputs.medidaC) / 2;

    return { areaQuadrado, areaTriangulo, areaTrapezio };
}

function displayResults(results: CalculationResults): void {
    console.log(`AREA DO QUADRADO = ${results.areaQuadrado.toFixed(4)}`);
    console.log(`AREA DO TRIANGULO = ${results.areaTriangulo.toFixed(4)}`);
    console.log(`AREA DO TRAPEZIO = ${results.areaTrapezio.toFixed(4)}`);
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