function solution(n, numlist) {
    var answer = [];
    return numlist.filter((num)=>num%n===0);
}