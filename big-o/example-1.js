function foo(ints) {
    let sum = 0;
    let product = 1;
    for (let i = 0; i < ints.length; i++) {
        sum += ints[i];
    }
    for (let i = 0; i < ints.length; i++) {
        product *= ints[i];
    }
    console.log(`Sum: ${sum}, Product: ${product}`)
}

// Q: What is the runtime?
// A: O(N)