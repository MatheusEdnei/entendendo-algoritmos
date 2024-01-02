### Algoritmo de Dijkstra

O algoritmo de Dijkstra tem por objetivo encontrar o caminho mais rápido em um grafo. Ele pode ser usado em grafos valorados (ou ponderados), ou seja, grafos que possuem valores em suas arestas. Esses valores das arestas são chamados de pesos.

Desse modo, para calcular o caminho minimo em um grafo não ponderado, devemos utilizar a pesquisa em largura, já para um grafo ponderado utilizamos o algoritmo de Dijkstra.

O algoritmo de Dijkstra tem quatro passos:

- Encontre o vértice mais "barato". Este é o vértice em que você consegue chegar no menor tempo possível.
- Atualize o custo dos vizinhos desse vértice.
- Repita até que você tenha feito isso para cada vértice do grafo
- Calcule o caminho final.

### Ciclos em um grafo

Um grafo pode conter ciclos, onde uma parte do grafo (ou ele todo) começa e termina no mesmo vértice. O algoritmo de Dijkstra não funciona para esse tipo de grafo.

### Arestas com pesos negativos

Não podemos utilizar o algoritmo de Dijkstra para grafos que possuam arestas com pesos negativos. Para essa finalidade, existe o algoritmo de Bellman-Ford.