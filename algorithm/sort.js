/*
Bubble Sort

6 5 4 3 2 1
1. 5 4 3 2 1 6
2. 4 3 2 1 5 6
3. 3 2 1 4 5 6
4. 2 1 3 4 5 6
5. 1 2 3 4 5 6

n * (n - 1)
= O(n^2)
*/
function bubbleSort(arr) {
    const n = arr.length
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

/*
Selection Sort

6 5 4 3 2 1

1. 1 5 4 3 2 6
2. 1 2 4 3 5 6
3. 1 2 3 4 5 6
4. 1 2 3 4 5 6

2 9 8 3 4 7 1
1. 1 9 8 3 4 7 2
2. 1 2 8 3 4 7 9
3. 1 2 3 8 4 7 9
4. 1 2 3 4 8 7 9
5. 1 2 3 4 7 8 9


n * (n - 1)
= O(n^2)
*/

function selectionSort(arr) {
    const n = arr.length

    for (let i = 0; i < n - 1; i++) {
        let min = Infinity
        let minIndex = -1
        for (let j = i; j < n; j++) {
            if (arr[j] < min) {
                min = arr[j]
                minIndex = j
            }
        }
        const temp = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = temp
    }

    return arr
}

/*
2 9 8 3 4 7 1

2
2 9
2 8 9
2 3 8 9
2 3 4 8 9
2 3 4 7 8 9 
1 2 3 4 5 7 8 9

= O(n^2)
*/

function insertionSort(arr) {
    const n = arr.length

    for (let i = 0; i < n; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] >= arr[j - 1]) break
            const temp = arr[j]
            arr[j] = arr[j - 1]
            arr[j - 1] = temp
        }
    }

    return arr
}

// quick sort
function quickSort(arr) {
    if (arr.length <= 1) return arr
    const pivot = arr[0]
    console.log('quick sort: ', arr, pivot)

    const left = arr.filter(v => v < pivot)
    const right = arr.filter(v => v > pivot)
    return [...quickSort(left), pivot, ...quickSort(right)]
}


// merge sort
function mergeSort(arr) {
    if (arr.length === 1) return arr
    const left = arr.splice(0, arr.length / 2)
    const right = arr
    return merge(mergeSort(left), mergeSort(right))
}

function merge(a, b) {
    return []
}

console.log(bubbleSort([6, 5, 1, 4, 2, 8, 3]))
console.log(selectionSort([6, 5, 1, 4, 2, 8, 3]))
console.log(insertionSort([6, 5, 1, 4, 2, 8, 3]))
console.log(quickSort([4, 5, 1, 6, 2, 8, 3]))
[4,5,61,2,3].sort((a, b) => a - b)