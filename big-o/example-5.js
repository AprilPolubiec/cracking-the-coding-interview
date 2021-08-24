function printPairs(intsA, intsB) {
    for (let i = 0; i < intsA.length; ++i) { // O(A)
        for (let j = 0; j < intsB.length; ++j) { // O(B)
            for (let k = 0; k < 100000; ++k) { // O(1)
                console.log(`ints[i]: ${intsA[i]}, ints[j]: ${intsB[j]}`) // O(1)
            }
        }
    }
}

// Q: What is the runtime?
// A: O(AB)