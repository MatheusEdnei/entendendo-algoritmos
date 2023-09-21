// Escreva uma função recursiva que conte o número de itens em uma lista

export function countedItemsList(arr) {
    if (arr.length === 1) return 1;
    return 1 + countedItemsList(arr.slice(1));
}

console.log(countedItemsList([1,2,3,4,5,6,7,8]));