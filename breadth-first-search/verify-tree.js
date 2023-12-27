const graph = {
    A: ['B', 'C'],
    B: ['D', 'E'],
    C: ['F', 'G'],
    D: [],
    E: [],
    F: [],
    G: []
  };
  
  function verifyTree(graph, root, parent) {
    // Verifica se o nó atual já foi visitado
    if (visited[root]) {
      return false;
    }
  
    // Marca o nó atual como visitado
    visited[root] = true;
  
    // Verifica se o pai do nó atual é o pai esperado
    if (parent && parent !== parents[root]) {
      return false;
    }
  
    // Verifica se cada filho do nó atual é válido
    for (let i = 0; i < graph[root].length; i++) {
      let child = graph[root][i];
  
      if (!verifyTree(graph, child, root)) {
        return false;
      }
    }
  
    return true;
  }
  
  // Exemplo de uso
  let visited = {};
  let parents = {};
  
  if (verifyTree(graph, 'A', null)) {
    console.log('Árvore genealógica válida!');
  } else {
    console.log('Árvore genealógica inválida!');
  }