# Lógica de Programação com TypeScript

Este repositório é uma coleção pessoal de exercícios em TypeScript que venho desenvolvendo para aprimorar meu entendimento da lógica de programação e algoritmos. Ele serve como um espaço para praticar conceitos-chave e fortalecer minhas habilidades de resolução de problemas.

Os exercícios abrangem tanto os conceitos fundamentais como também abordam boas práticas de programação, incluindo organização do código, tratamento de erros e uso eficiente de interfaces e tipos no TypeScript.

## Tópicos Abordados

- **Variáveis**: Entender e utilizar variáveis para armazenar dados com tipos adequados em TypeScript.
- **Entrada e Saída**: Gerenciar a entrada do usuário e exibir saídas de forma eficaz.
- **Comando de Atribuição (Processamento)**: Utilizar operadores de atribuição para realizar cálculos e processamento de dados garantindo a segurança dos tipos.
- **Estruturas Condicionais**: Trabalhar com instruções `if`, `else` e `switch` para controlar o fluxo do programa utilizando a verificação rigorosa de tipos do TypeScript.
- **Estruturas Repetitivas**: Dominar loops como `for`, `while` e `do-while` para repetir ações de forma eficiente.
- **Arrays**: Manipular arrays tipados para armazenar coleções de dados com segurança.
- **Matrizes**: Trabalhar com arrays 2D (matrizes) para estruturas de dados mais complexas com tipos explícitos.
## Códigos com Boas Práticas
Com o tempo, estou evoluindo para uma abordagem mais profissional na implementação dos meus códigos. Isso inclui:

✅ Uso de **interfaces** para definir tipos claros e seguros.
✅ Funções bem separadas e organizadas conforme sua responsabilidade.
✅ **Tratamento de erros** com `try/catch` para lidar com situações inesperadas.
✅ Implementação de mensagens claras para o usuário.

### Exemplo de Código com Boas Práticas

```typescript
/**
 * Nome do Exercício: Cálculo de Troco
 *
 * Descrição: Calcula o valor do troco após uma compra.
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
    precoUnitario: number;
    quantidade: number;
    valorPago: number;
}

interface CalculationResults {
    troco: number;
}

function getInputValues(): InputValues {
    return {
        precoUnitario: getNumberInput('Preço unitário do produto: '),
        quantidade: getIntInput('Quantidade comprada: '),
        valorPago: getNumberInput('Dinheiro recebido: ')
    };
}

function calculateResults(inputs: InputValues): CalculationResults {
    const valorTotal = inputs.precoUnitario * inputs.quantidade;
    const troco = inputs.valorPago - valorTotal;
    return { troco };
}

function displayResults(results: CalculationResults): void {
    console.log(`TROCO = R$ ${results.troco.toFixed(2)}`);
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
```

Este modelo busca refletir um código mais robusto e limpo, adequado para ambientes profissionais.

## Como Executar os Exercícios
1. Clone este repositório: `git clone https://github.com/Gustabolou/logica-typescript.git`
2. Instale as dependências necessárias com `npm install`
3. Execute os arquivos utilizando o comando `ts-node caminho/do/arquivo.ts`

## Próximos Passos
- Continuar ampliando os exercícios para cobrir mais conceitos avançados.
- Aprimorar ainda mais as boas práticas no código.

---
Este repositório está em constante evolução ✅. Sinta-se à vontade para explorar, sugerir melhorias e contribuir! 🚀

