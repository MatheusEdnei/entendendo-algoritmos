// Encontre o valor mais alto em uma lista

export function bigNumber(arr) {
    if (arr.length === 1) return arr[0];
    const numberCompare = bigNumber(arr.slice(1));
    if (arr[0] > numberCompare) {
        return arr[0];
    } 
    return numberCompare;
}

console.log(bigNumber([9,4,6,3]));