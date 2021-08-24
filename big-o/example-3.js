function printPairs(ints) {
    for (let i = 0; i < ints.length; ++i) {
        for (let j = i + 1; j < ints.length; ++j) {
            console.log(`ints[i]: ${ints[i]}, ints[j]: ${ints[j]}`)
        }
    }
}

// Q: What is the runtime?
// A:  O(N^2)

// Suppose ints = [0, 1, 2, 3, 4]

// i   j
// 0   1
//     2
//     3
//     4
// 1   2
//     3
//     4
// 2   3
//     4
// 3   4
// 4   undefined

// n - 1 + n - 2 + n - 3 ... + 2 + 1
// 4 + 3 + 2 + 1
// n(n - 1) / 2
// (n^2 - n) / 2
