function solution(strings, n) {
    var answer = [];
    return strings.sort((a,b)=> a[n]>b[n]? 1:a[n]===b[n]? a>b? 1: -1: -1);
}