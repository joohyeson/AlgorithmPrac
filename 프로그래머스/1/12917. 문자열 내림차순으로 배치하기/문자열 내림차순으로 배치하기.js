function solution(s) {
    var answer = '';
    return [...s].sort((a,b)=> a>b? -1: 1).join("");
}