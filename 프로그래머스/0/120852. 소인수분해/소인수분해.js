function solution(n) {
    var answer = [];
    
    for(let i=2; i<=n; i++){
        if((n%i)===0&&answer.findIndex((num)=>i%num===0)===-1){
            answer.push(i)
        }
    }
    return answer;
}