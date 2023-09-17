## Como funciona a memória do computador

O computador se parece com um grande conjunto de gavetas, e cada gaveta tem seu endereço. </br>
Cada vez que quer armazenar um item na memória, você pede ao computador um pouco de espaço e ele te dá um endereço no qual você pode armazenar o seu item. Se quiser armazenar múltiplos itens existem duas maneiras de se fazer isso: arrays e listas.

## Array

Arrays são estruturas básicas nas quais todas os seus itens estão armazenados de maneira contígua (um do lado do outro) na memória do computador. </br>
Devido a esse fato, adicionar novos itens a um array será muito lento, devido ao fato de que necessitaremos que o próximo espaço da memória esteja vazio, caso contrário, precisaremos realocar todo o array.</br>
Arrays são ótimos se você deseja ler elementos em posições aleatórias, pois pode encontrar qualquer elemento instantaneamente.

## Listas encadeadas

Listas encadeadas são estruturas básicas onde os itens podem estar em qualquer lugar da memória. Cada item da lista armazena o endereço do próximo item da lista, formando assim uma ligação. </br>
Sendo assim, é fácil adicionar um novo item a uma lista encadeada: podemos coloca-lo em qualquer lugar da memória e armazenar o endereço do item anterior. Desse modo, não precisamos mover todos os itens ou esperar que haja um espaço vazio na memória contigua ao ultimo elemento da lista. </br>
No entanto, Listas encadeadas se mostram uma solução ruim se você precisar pular de um item para o outro, devido ao fato de que os itens não estão próximos uns dos outros, então não podemos calcular instantâneamente a posição de um item na memória. Por exemplo, se quisermos acessar o quinto item, precisariamos percorrer as quatro primeiras posições até descobrir o quinto item.

## Tempo de execução

|ALGORITMO       |Array                          |Listas                       |
|----------------|-------------------------------|-----------------------------|
|Leitura         |O(1)                           | O(n)                        |
|Inserção        |O(n)                           | O(1)                        |
|Eliminação      |O(n)                           | O(1)                        |

Onde O(1) é um tempo de execução constante.

### Perguntas

Por que é necessário um tempo de execução O(n) para inserir um elemento em um array? Suponha que você queira inserir um elemento no começo de um array. Como faria isso? Quanto tempo levaria? Encontre as respostas no final desta seção!

*R.: Teriamos que mover um array inteiro para poder adicionar um elemento*

### Exercícios

2.1. Suponha que você esteja criando um aplicativo para acompanhar as suas finanças.

1. COMPRAS
2. CINEMA
3. MENSALIDADE DO SFBC

Todos os dias você anotará tudo o que gastou e onde gastou. No final do mês você deverá revisar os seus gastos e resumir o quanto gastou. Logo você terá um monte de inserções e poucas leituras. Você deverá usar um array ou uma lista para implementar este aplicativo?

*R.: Como iremos inserir mais vezes do que ler, faz mais sentido usar uma lista encadeada. Além disso, listas encadeadas tem leitura lenta somente quando você acessa elementos aleatórios da lista. Como estará lendo todos os elementos da lista, a lista encadeada terá também uma boa velocidade de leitura.*
