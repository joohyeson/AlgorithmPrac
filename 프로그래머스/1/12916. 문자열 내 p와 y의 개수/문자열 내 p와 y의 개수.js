function solution(s){
    var answer = [...s.toUpperCase()];
    return answer.filter((a)=> a==='P').length===answer.filter((a)=> a==='Y').length;
}