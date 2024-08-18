function solution(left, right) {
    var answer = 0;
    
    for(let i=left; i<=right; i++){
        let cnt=0; 
        if(Number.isInteger(Math.sqrt(i))){
            answer-=i
        }else{
            answer+=i
        }
    }
    return answer;
}