function printPairs(ints) {
    for (let i = 0; i < ints.length; ++i) {
        for (let j = 0; j < ints.length; ++j) {
            console.log(`ints[i]: ${ints[i]}, ints[j]: ${ints[j]}`)
        }
    }
}


// Q: What is the runtime?
// A: O(N^2)