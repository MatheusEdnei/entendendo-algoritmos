// Selection sort

export function selectionSort (array) {
    let newArray = [];
    const lengthArray = array.length

    for (let i = 0; i < lengthArray; i++) {
        const indexSmaller = findBigger(array);
        newArray.push(array[indexSmaller]);
        array.splice(indexSmaller,1);
    }
    return newArray;
}

function findSmaller (array) {
    let smaller = array[0];
    let indexSmaller = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < smaller) {
            smaller = array[i];
            indexSmaller = i;
        }
    }

    return indexSmaller;
}

function findBigger (array) {
    let bigger = array[0];
    let indexBigger = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > bigger) {
            bigger = array[i];
            indexBigger = i;
        }
    }

    return indexBigger;
}



console.log(selectionSort([5,3,6,2,10]));