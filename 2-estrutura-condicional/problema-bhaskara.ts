/**
 * Problema: Bhaskara
 * 
 * Descrição: Lê os coeficientes de uma equação do segundo grau e 
 * calcula as raízes usando a fórmula de Bhaskara.
 */

function main(): void {
    try {
        const coefficients = getCoefficients();
        const roots = calculateRoots(coefficients);
        displayResults(roots);
    } catch (error) {
        handleError(error);
    }
}

interface Coefficients {
    a: number;
    b: number;
    c: number;
}

interface Roots {
    x1?: number;
    x2?: number;
    hasRealRoots: boolean;
}

function getCoefficients(): Coefficients {
    return {
        a: getNumberInput('Coeficiente a: '),
        b: getNumberInput('Coeficiente b: '),
        c: getNumberInput('Coeficiente c: ')
    };
}

function calculateRoots(coefficients: Coefficients): Roots {
    const { a, b, c } = coefficients;
    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
        return { hasRealRoots: false };
    }

    const sqrtDelta = Math.sqrt(delta);
    const x1 = (-b + sqrtDelta) / (2 * a);
    const x2 = (-b - sqrtDelta) / (2 * a);
    
    return { x1, x2, hasRealRoots: true };
}

function displayResults(roots: Roots): void {
    if (!roots.hasRealRoots) {
        console.log('Esta equação não possui raízes reais.');
    } else {
        console.log(`X1 = ${roots.x1?.toFixed(4)}`);
        console.log(`X2 = ${roots.x2?.toFixed(4)}`);
    }
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


