/*
Problema "retangulo"
Fazer um programa para ler as medidas da base e altura de um retângulo. Em seguida, mostrar o valor
da área, perímetro e diagonal deste retângulo, com quatro casas decimais, conforme exemplos.
*/

(function () {
    const base: number = parseFloat(prompt('Base do retângulo: ') || "0");
    const altura: number = parseFloat(prompt('Altura do retângulo: ') || "0");

//(A = base * altura)
    const area: number = base * altura;

 //(P = 2 × (base + altura))
    const perimetro: number = 2 * (base + altura);

//Cálculo da diagonal (D = √(base² + altura²))
    const diagonal: number = Math.sqrt(base ** 2 + altura ** 2);

    console.log(`Área do retângulo: ${area.toFixed(2)}`);
    console.log(`Perímetro do retângulo: ${perimetro.toFixed(2)}`);
    console.log(`Diagonal do retângulo: ${diagonal.toFixed(2)}`);
})();
