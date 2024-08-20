function solution(n) {
    
    var answer = 1;
    for(let i=n-1; i>0; i--){
        let sum=0;
        for(let j=i; j>0; j--){
            sum+=j;
            if(sum>=n){
                if(sum===n){
                answer++;
                } 
                break;
            }
            
        }
    }
    return answer;
}