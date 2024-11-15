### Algoritmos gulosos

Os algoritmos gulosos, também chamados de algoritmos gananciosos, são algoritmos simples
nos quais em cada etapa devemos escolher o movimento ideal. São algoritmos fáceis de escrever e possuem tempos
de execução baixos.

### Algortimo de aproximação
São algoritmos utilizados quando é necessário muito tempo para calcular a solução exata de um problema. 
Eles são avaliados:

- Por sua rapidez
- Pela capacidade de chegar a solução ideal

### Problemas NP-Completos
São problemas dificeis de resolver de maneira rápida, sendo muitas vezes necessário utilizar um algoritmo
de aproximação. Como exemplo, temos o algoritmo do caixeiro viajante e o problema da cobertura de conjuntos.
Não há uma maneira simples de dizer que um problema é NP-Completo, mas alguns indicativos são:

- Seu algoritmo roda rápido para alguns itens, mas fica muito lento com o aumento de itens.
- "Todas as combinações de X" geralmente significam um problema NP-completo
- Você tem de calcular "cada possível versão" de X porque não pode dividir em subproblemas menores
- Se po seu problema envolve uma sequência (como uma sequência de cidades) e é difícil de resolver
- Se o seu problema envolve um conjunto e é difícil de resolver.
- Se você pode reescrever o seu problema como o problema de cobertura mínima de conjuntos ou o problema do 
caixeiro-viajante.

### Exercicios

8.1) Você trabalha para uma empresa de mobílias e tem de enviar os móveis para todo o país. É necessário
encher seu caminhão com caixas, e todas as caixas são de tamanhos diferentes. Você está
tentando maximizar o espaço que consegue usar em cada caminhão. Como escolheria as caixas para 
maximizar o espaço? Proponha uma solução gulosa. Ela lhe dará a solução ideal?

R.: Uma estratégia gulosa seria escolher a maior caixa que cabe no espaço restante, repetindo até que não seja mais poissível colocar nenhuma caixa.
Não, a solução ideal não será alcançada.

8.2) Você está viajando para a Europa e tem sete dias para visistar o amior número de lugares. Para cada lugar, você
atribui um valor (o quanto deseja ver) e estima quanto tempo demora. Como maximizar o total de pontos (passar por todos os lugares que você realmente quer ver)
durante sua estadia? Proponha uma solução gulosa. Ela lhe dará a solução ideal?

R.: Continue escolhendo a atividade com a maior pontuação possível que você ainda consegue fazer com o tempo que sobra.
Pare quando não houver mais tempo para nenhuma atividade. Não, isto não lhe dará a solução ideal.

Para cada um desses algoritmo, diga se ele é um algoritmo guloso ou não.

8.3) Quicksort: não
8.4) Pesquisa em largura: não
8.5) Algoritmo de Dijkstra: sim