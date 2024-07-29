function solution(n) {
    var answer = 0;
    return Math.round(Math.sqrt(n))*Math.round(Math.sqrt(n))===n? 1:2;
}