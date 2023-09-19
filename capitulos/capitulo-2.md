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

## Inserindo algo no meio da lista

Para inserir um elemento no meio da lista a melhor alternativa é uma lista encadeada porque precisariamos apenas mudar o endereço para o qual o elemento anterior estará apontando, enquanto que nos arras precisariamos mover todos os elementos abaixo da inserção para um espaço contiguo da memória. Se não houver espaço suficiente seria preciso mover todo o array.

## Deleções 

Para deletar um elemento a melhor opção também é um lista encadeada porque precisariamos apenas mudar o endereço para o qual o elemento anterior está apontando. Com arrays, tudo precisa ser movido quando um elemento é eliminado.

Os Arrays são mais comumente utilizados devido ao fato de permitirem acesso aleatório, enquanto que as listas encadeadas possuem acesso sequencial, tendo que ler os elementos um por um começando do primeiro. O acesso aleatório permite que você acesse o elemento desejado diretamente.

## Ordenação por seleção

O tempo de execução da ordenação por seleção é O(n<sup>2</sup>).
A ordenação por seleção é um algoritmo bom, mas não é muito rápido. O quicksort é um algoritmo de ordenação mais rápido, que tem tempo de execução de apenas O(n log(n))
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

2.2. Suponha que você esteja criando um aplicativo para anotar os pedidos dos clientes em um restaurante. Seu aplicativo precisa de uma lista de pedidos. Os garçons adicionam os pedidos a essa lista e os chefes retiram os pedidos da lista. Funciona como uma fila. Os garçons colocam os pedidos no final da fila e os chefes retiram os pedidos do começo dela para cozinha-los.
Você usaria um array ou uma lista encadeada para implementar essa lista? (Dica: listas encadeadas são boas para inserções/eliminações e arras são bons para acesso aleatório. O que fazer nesse caso?)

*R.: Devemos usar uma lista encadeada. Iremos fazer inserções e deleções na lista, sempre deletando o primeiro e adicionando ao ultimo elemento. Visto que o tempo de execução para ambas as operações é O(1), a lista encadeada é a melhor solução*

2.3. Vamos analisar um experimento. Imagine que o Facebookguarda uma lista de usuários. Quando alguém tenta acessar o Facebook, uma busca é feita pelo nome de usuário. Se o nome da pessoa está na lista, ela pode continuar o acesso. As pessoas acessam o Facebook com muita frequência, então existem muitas buscas nessa lista. Presuma que o Facebook usa a pesquisa binária para procurar um nome na lista. A pesquisa binária requer acesso aleatório - você precisa ser capaz de acessar o meio da lista de nomes instantaneamente. Sabendo disso, você implementaria essa lista como um array ou lista encadeada?

*R.: O ideal seria um array, visto que eles são ideais para acesso aleatório, tendo tempo de execução O(1). É importante salientar que o array deve estar ordenado.*

2.4. As pessoas se inscrevem no Facebook com muita frequência também. Suponha que você decida usar um array para armazenar a lista de usuários. Quais as desvantagens de um array em relação às inserções? Em particular, imagine que você está usando a pesquisa binária para buscar os logins. O que acontece quando você adiciona novos usuários em um array?

*R.: Um array possui tempo de execução para a inserção de O(n). A principal desvantagem nesse sentido é a de que para armazenar o novo array, no pior caso, precisamos mover todo o array para um outro espaço de memória, além de precisar ordena-lo.*
