function isPrime(n) {
    let isPrime = true;
    let i = 2;
    while (i < parseInt(n ** 0.5) + 1) {
        if (n % i == 0) {
            isPrime = false;
            break;
        }
        i++;
    }
    return isPrime;
}
