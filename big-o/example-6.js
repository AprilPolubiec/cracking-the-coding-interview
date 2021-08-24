function reverse(ints) {
    for (let i = 0; i < ints.length / 2; ++i) { // O(N/2)
        let other = ints.length - i - 1;
        let temp = ints[i];
        ints[i] = ints[other];
        ints[other] = temp;
    }
}

// Q: What is the runtime?
// A: O(N)