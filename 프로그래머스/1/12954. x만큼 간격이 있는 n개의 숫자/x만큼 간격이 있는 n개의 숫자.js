function solution(x, n) {
    var answer = [];
    return Array(n).fill(0).map((s, idx)=> x*(idx+1));
}