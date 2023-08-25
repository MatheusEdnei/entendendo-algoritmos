## Algoritmos

Um algoritmo é um conjunto de instruções que realizam uma tarefa.

## Métodos de pesquisa

### Pesquisa binária

A pesquisa binária é um algoritmo de busca que recebe como parâmetros uma lista ordenada e um item. A sua função é verificar se o item passado está contido na lista. Se o elemento estiver contido na lista, o algoritmo retorna a posição, caso contrário retorna nulo. 

A pesquisa binária trabalha dividindo a lista pela metade a cada nova etapa de busca, o que a torna extremamente eficiente em relação a pesquisa simples (pesquisa feita verificando todos os elementos da lista). 

## Tempo de Execução

Para falarmos de algoritmos, precisamos falar sobre o seu tempo de execução, para que possamos sempre escolher o algoritmo mais eficiente para nossa aplicação.
Vamos observar os algoritmos de Pesquisa Simples e Pesquisa binária:
- na Pesquisa Simples pesquisa simples, precisamos verificar a lista item por item, ou seja, se tivermos uma lista com 100 itens, no pior caso teremos 100 verificações (ou 100 etapas). Isso se chama ***Tempo linear***.

- na Pesquisa Binária, se tivermos uma lista com 100 itens, precisamos de, no máximo, 7 etapas para achar o item. Assim, ela é executada com ***Tempo logarítmico***.

## Notação Big O

A notação Big O é uma notação que diz o quão rápido é um algoritmo. 
O tempo de execução de algoritmos cresce a taxas diferentes, sendo assim é preciso saber se o tempo de execução aumenta conforme a lista aumenta.

Nesse sentido, ***a notação Big O informa o quão rápido é um algoritmo***. É importante ressaltar que a notação não fornece o tempo em segundos. *A notação Big O permite que você compare o número de operações, informando o quão rápido um algoritmo cresce*.

A notação Big O leva em conta o pior caso, pior das hipóteses. É uma garantia que você tem de que o tempo nunca será maior que o estabelecido na notação Big O.

Resumindo:
- A rapidez de um algoritmo não é medida em segundos, mas pelo crescimento do número de operações.
- Em vez disso, discutimos sobre o quão rapidamente o tempo de execução de um algoritmo aumenta conforme o número de elementos aumenta.
- O tempo de execução em algoritmos é expresso na notação Big O.
- O(log(n)) é mais rápido que O(n), e O(log(n)) fica ainda mais rápido conforme a lista aumenta.

### Exercícios

1.1 Suponha que você tenha uma lista de 128 nomes e esteja fazendo uma pesquisa binária. Qual seria o número máximo de etapas que você levaria para encontrar o nome desejado?

*R.: considerando que 128 = 2<sup>n</sup>, onde "n" é o número de etapas.
Sendo assim temos que n = 7, pois 2<sup>7</sup> = 128.
7 Eatpas*

1.2 Suponha que você duplique o tamanho da lista. Qual seria o número máximo de etapas agora?

*R.: dobrando o número de etapas temos 256 etapas, logo tempos
256 = 2<sup>n</sup>, onde n é o número de etapas.
Logo n = 8, pois 2<sup>8</sup> = 256.
8 Etapas.*

Forneça o tempo de execução para cada um dos casos a seguir em termos de notação Big O.

1.3 Você tem um nome e deseja encontrar o número de telefone apra esse nome em uma agenda telefonica.

*R.: Podemos usar a pesquisa binária, sendo assim temos O(log n)*

1.4 Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefonica. (Dica: deve procurar pela agenda inteira!)

*R.: visto que precisamos procurar pela lista inteira, temos um caso de pesquisa simples com tempo de execução O(n)*

1.5. Você quer ler o número de cada pessoa da agenda telefonica.

*R.: como precisamos do número de cada pessoa, precisaremos verificar todos os itens da lista, sendo assim temos um tempo de execução O(n).*

1.6. Você quer ler os números apenas dos nomes que começam com A.
*R.: estamos buscando um item dentro de uma lista de 26 itens. Podemos pensar que a notação seria O(n/26), no entanto a notação Big O não permite constantes, sendo assim é uma notação O(n)*