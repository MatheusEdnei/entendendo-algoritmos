// Binary Search - log2(n)

export const binarySearch = (list, item) => {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        let middle = Math.floor((low + high) / 2)
        let kick = list[middle]

        if (kick == item) return middle

        if (kick > item) high = middle - 1

        else low = middle + 1
    }

    return null
}