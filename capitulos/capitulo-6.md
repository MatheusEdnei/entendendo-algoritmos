## Pesquisa em largura

A pesquisa em largura permite encontrar o menor caminho entre dois objetos.

### O que é um grafo?

Um modelo de grafo é um conjunto de conexões. Grafos são formados por vértices e arestas, e um vértice pode ser diretamente conectado a muitos outros vértices, por isso os chamamos de vizinhos.</br>
Os grafos são uma maneira de modelar como eventos diferentes estão conectados entre si.

O grafo pode ser direcionado (dígrafo), quando a relação entre os vértices acontece em apenas um sentido, ou não direcionado (ou simplesmente grafo) que não contém setas e ambos os vértices são vizinhos um do outro.

### Pesquisa em largura

A pesquisa em largura é um algoritmo que utiliza grafos.

- Existe algum caminho do vértice A até o vértice B
- Qual o caminho mínimo do vértice A até o vértice B.

Para a pesquisa em largura é necessário pesquisar os itens na ordem em que eles foram adicionados, por isso usa-se uma fila.

### Fila

A fila é uma estrutura de dados FIFO (acrônimo para First In, First Out, que em português significa Primeiro a Entrar, Primeiro a Sair). Com a fila é possível realizar duas operações: enqueue (enfileirar) e dequeue (desenfileirar).

### Implementando o grafo

Um grafo consiste de diversos vértices. Cada vértice é conectado aos vértices vizinhos. Para extressar a relação de mapeamento de um dado para outro usamos a tabela hash.

### Tempo de execução

A pesquisa em largura tem tempo de execução O(V + A), onde V é o número de vértices e A o número de arestas.