# Analise de dados com Weka

## Link da ferramenta utilizada

## O que foi feito?

## Como foi feito?
- Pegamos a base de dados gerada randomicamente da turma 153 tratamos os dados para o formato que a ferramenta reconhece .arff 

### Pre-processamento de Dados
- Retirada do atributo nome

- Discretizamos as informações dos Gaps para três grupos (que podemos considerar: baixo, médio e alto)

- Normalizamos os valores das notas e diferença absoluta média

### Aplicando Algoritmos de Machine Learning
- Utilizando algoritmo de árvore de decisão j48
> Ao clicar em Start o algoritmo é executado e validado usando a opção de teste definida.
> É exibido os resultados do processo de classificação.
> Nesse caso  87.5% das instâncias foram calculadas corretamente.

- Podamos a árvore alterando o valor do parâmetro 'confidence factor' para '1'.
> Com essa alteração estamos dizendo para o modelo que queremos uma árvore mais genérica.

- Utilizando algoritmo de SVM – Suporte Vector Machines - SMO
> Nesse caso  80% das instâncias foram calculadas corretamente.

- Utilizando algoritmos de rede reural - MultilayerPerceptron
> Nesse caso  64.2857% das instâncias foram calculadas corretamente.

## Submetendo set de test
- Fizemos os teste utilizando o algoritmos de arvore de decisão