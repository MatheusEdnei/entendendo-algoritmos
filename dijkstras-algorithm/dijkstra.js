export function dijkstra(graph, start, end) {
  const costs = {};
  const processed = [];
  let neighbors = {};

  Object.keys(graph).forEach(node => {
    if (node !== start) {
      let value = graph[start][node]
      costs[node] = value || Infinity
    }
  });

  let node = findLowestCostNode(costs, processed);

  while (node) {
    let cost = costs[node]
    neighbors = graph[node]
    Object.keys(neighbors).forEach(neighbor => {
      let newCost = cost + neighbors[neighbor]
      if (newCost < costs[neighbor]) {
        costs[neighbor] = newCost
      }
    })
    processed.push(node)
    node = findLowestCostNode(costs, processed)
  }

  return costs[end]
}

function findLowestCostNode(costs, processed) {
  let lowestCost = Infinity
  let lowestCostNode = null

  Object.keys(costs).forEach(node => {
    let cost = costs[node]
    if (cost < lowestCost && !processed.includes(node)) {
      lowestCost = cost
      lowestCostNode = node
    }
  })

  return lowestCostNode
}