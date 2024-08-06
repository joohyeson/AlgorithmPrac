function solution(prices) {
    // 1 2 2 3 3
    // 4 3 1 1 0
    
    var answer = [];
    for(let i=0; i<prices.length; i++){
        const target=prices[i];
        let count=0;
        for(let j=i+1; j<prices.length; j++){
            count++
            if(prices[j]<target){
                break;
                
            }
        }
        
        answer.push(count)
    }
    return answer;
}