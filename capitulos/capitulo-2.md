## Como funciona a memória do computador

O computador se parece com um grande conjunto de gavetas, e cada gaveta tem seu endereço. </br>
Cada vez que quer armazenar um item na memória, você pede ao computador um pouco de espaço e ele te dá um endereço no qual você pode armazenar o seu item. Se quiser armazenar múltiplos itens existem duas maneiras de se fazer isso: arrays e listas.

## Array

Arrays são estruturas básicas nas quais todas os seus itens estão armazenados de maneira contígua (um do lado do outro) na memória do computador. </br>
Devido a esse fato, adicionar novos itens a um array será muito lento, devido ao fato de que necessitaremos que o próximo espaço da memória esteja vazio, caso contrário, precisaremos realocar todo o array.

## Listas encadeadas

Listas encadeadas são estruturas básicas onde os itens podem estar em qualquer lugar da memória. Cada item da lista armazena o endereço do próximo item da lista, formando assim uma ligação. </br>
Sendo assim, é fácil adicionar um novo item a uma lista encadeada: podemos coloca-lo em qualquer lugar da memória e armazenar o endereço do item anterior. Desse modo, não precisamos mover todos os itens ou esperar que haja um espaço vazio na memória contigua ao ultimo elemento da lista. </br>