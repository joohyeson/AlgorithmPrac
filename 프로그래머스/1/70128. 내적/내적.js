function solution(a, b) {
    var answer = 1234567890;
    return a.reduce((acc, cur, idx)=> acc+(cur*b[idx]),0);
}