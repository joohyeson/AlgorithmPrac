function solution(brown, yellow) {
    let all=brown+yellow;
    
    for(let i=3; i<all; i++){
        if(all%i===0){
            const x=i;
            const y=all/i;
            
            if((x-2)*(y-2)===yellow){
                return [y,x]
            }
        }
    }
}