function solution(n) {
    var answer = [];
    
    //
    const calc=(count, start, sub, target)=>{
        if(count===1){
            answer.push([start, target])
            return;
        }
        calc(count-1, start, target, sub);
        answer.push([start, target])
        calc(count-1, sub,start, target)
    }
    
    calc(n, 1, 2, 3)
    return answer;
}