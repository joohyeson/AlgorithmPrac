function solution(n) {
    var answer = [];
    let i=2
    while(n>=i){
         if((n%i)===0){
            answer.push(i)
            n=Math.round(n/i)
        }else{
            i++
        }
    }
    
    return [...new Set(answer)]
}