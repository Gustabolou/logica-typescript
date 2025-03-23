/*
Problema "idades"
Fazer um programa para ler o nome e idade de duas pessoas. Ao final mostrar uma mensagem com os
nomes e a idade média entre essas pessoas, com uma casa decimal.
*/

(function () {
    const nome1: string | null = prompt('Nome da primeira pessoa: ');
    const idade1: number = parseFloat(prompt('Idade da primeira pessoa: ') || "0");

    const nome2: string | null = prompt('Nome da segunda pessoa: ');
    const idade2: number = parseFloat(prompt('Idade da segunda pessoa: ') || "0");

    const mediaIdades: number = (idade1 + idade2) / 2;

    console.log(`Nome da primeira pessoa: ${nome1}, Idade: ${idade1}`);
    console.log(`Nome da segunda pessoa: ${nome2}, Idade: ${idade2}`);
    console.log(`Média das idades: ${mediaIdades.toFixed(1)}`);
})();

