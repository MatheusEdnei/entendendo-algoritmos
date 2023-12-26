export function breadthFirstSearch(graph, startNode, endNode) {
  const queue = [startNode];
  const visited = new Set();

  while (queue.length > 0) {
    const current = queue.shift();
    
    if (current === 'F') {
      console.log('found');
      return true;
    }

    if (current === endNode) {
      return true;
    }

    for (const neighbor of graph[current]) {
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return false;
}