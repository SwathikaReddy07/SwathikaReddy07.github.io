function digitSum(n) {
    let sum = 0;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

function countValidM(N) {
    let count = 0;
    for (let M = 0; M <= N; M++) {
        let s1 = digitSum(M);
        let s2 = digitSum(s1);
        if (M + s1 + s2 === N) {
            count++;
        }
    }
    console.log(count);
}

const N = 9;
countValidM(N);