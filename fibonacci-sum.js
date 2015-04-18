var MAX_NUMBER = 4e6;

var sum = 0;
for (var i = 1; /* infinite loop */; i++) {
    var value = fibonacci(i);
    if (value > MAX_NUMBER) {
        break;
    }
    if (value % 2 === 0) {
        sum += value;
        log(value)
    }
}
log('-------------')
log(sum);

/**
 * Returns the i-th element of Fibonacci sequence.
 *
 * @param {number} i Element position in the sequence.
 * @return {number} i-th element of the sequence.
 */
function fibonacci(i) {
    if (i < 3) {
        return 1
    }

    var n = Math.floor(i / 2);

    if (i % 2 === 0) {
        return Math.pow(fibonacci(n + 1), 2) - Math.pow(fibonacci(n - 1), 2);
    } else {
        return Math.pow(fibonacci(n), 2) + Math.pow(fibonacci(n + 1), 2);
    }
}

