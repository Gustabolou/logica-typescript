/*
Problema "terreno"
Fazer um programa para ler as medidas da largura e comprimento de um terreno retangular com uma
casa decimal, bem como o valor do metro quadrado do terreno com duas casas decimais. Em seguida,
o programa deve mostrar o valor da área do terreno, bem como o valor do preço do terreno, ambos com
duas casas decimais.
*/

(function () {
    const largura: number = parseFloat(prompt('Digite a largura do terreno: ') || "0");
    const comprimento: number = parseFloat(prompt('Digite o comprimento do terreno: ') || "0");
    const m2: number = parseFloat(prompt('Digite o valor do metro quadrado: ') || "0");

    const area: number = largura * comprimento;
    const valorTotal: number = area * m2;

    console.log(`Área do terreno: ${area.toFixed(2)} m²`);
    console.log(`Valor total do terreno: R$ ${valorTotal.toFixed(2)}`);
})();
