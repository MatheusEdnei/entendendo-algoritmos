### Dividir para conquistar (DC)

Os algoritmos DC são recursivos. Assim, para resolver um problema utilizando DC, você deve seguir dois passos.
1. Descubra o caso-base, que deve ser o caso mais simples possível
2. Divida ou diminua o seu problema até que ele se torne o caso-base.

Quando estiver escrevendo uma função de recursão que envolva um array, o caso-base será, muitas vezes, um array vazio ou um array com apenas um elemento.

### Quicksort

O quicksort é um algoritmo de ordenação. Este algoritmo é muito mais rápido do que a ordenação por seleção e é muito utilizado na prática. Ele também utiliza a estratégia DC.

O algoritmo funciona da seguinte maneira:
- O caso base será arrays vazios ou com apenas um elemento, visto que nesses não temos nada para ordenar.
- Primeiro escolha um elemento do array. Esse elemento será chamado de pivô.
- Assim, encontre os elementos que são menores do que o pivô e também os elementos que são maiores. </br>

Isso é chamado de particionamento. Desse modo, você tem:
- Um subarray contendo todos os números menores do que o pivô
- O pivô
- Um subarray contendo todos os números maiores do que o pivô

Os dois subarrays não estão ordenados, apenas particionados. Porém se eles estivessem ordenados, a ordenação do array contendo todos os elementos seria simples.

- Se você estiver implementando o quicksort, escolha um elemento aleatório como o pivô. O tempo de execução médio do quicksort é O(n * log n)
### Notação Big O revisada

- A constante na notação Big O, pode ser relevante em alguns casos. Esta é a razão pela qual o quicksort é mais rápido do que o merge sort.
- A constante dificilmente será relevante na comparação entre pesquisa simples e pesquisa binária, pois O(log n) é muito mais rápido do que O(n) quando sua lista é grande.
### Exercicios

4.1. [Code](../exercises-chapter-4/exercise-4-1.js) </br>

4.2. [Code](../exercises-chapter-4/exercise-4-2.js) </br>

4.3. [Code](../exercises-chapter-4/exercise-4-3.js) </br>

4.4 Você se lembra da pesquisa binária do Caítulo 1? Ela também é um algoritmo do tipo dividir para conquistar. Você consegue determinar o caso-base e o caso recursivo para a pesquisa vbinária?

*R.: O caso base é um array com um item. Se o item que você está procurando combina com o item presente no array você o encontrou! Caso contrário, ele não está no array. </br> No caso recursivo para a pesquisa binária, você divide o array pela metade, joga fora uma metade e executa uma pesquisa binária na outra metade.*