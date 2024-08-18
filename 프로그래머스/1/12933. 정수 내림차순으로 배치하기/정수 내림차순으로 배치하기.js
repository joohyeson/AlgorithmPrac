function solution(n) {
    var answer = 0;
    return +n.toString().split("").sort((a,b)=> b-a).map((s)=> Number(s)).join("");
}