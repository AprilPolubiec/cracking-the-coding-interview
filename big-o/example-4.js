function printPairs(intsA, intsB) {
    for (let i = 0; i < intsA.length; ++i) { // O(A)
        for (let j = 0; j < intsB.length; ++j) { // O(B)
            console.log(`ints[i]: ${intsA[i]}, ints[j]: ${intsB[j]}`) // O(1)
        }
    }
}

// Q: What is the runtime?
// A: O(AB)