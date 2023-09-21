export function quicksort(arr) {
    if (arr.length <= 1) return arr;
    const pivo = arr[0];
    const menores  = [];
    const maiores = [];

    for (const element of arr) {
        if (element < pivo) menores.push(element);
        if (element > pivo) maiores.push(element);
    }

    return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

console.log(quicksort([2,3,1]));