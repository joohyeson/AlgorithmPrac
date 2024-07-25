function solution(n) {
    let count=0;
    for(let i=1; i<=n; i++){
        
        for(let j=2; j<i;j++){
            if(Math.floor(i%j)===0){
                count+=1;
                break;
            }
        }
    }
    return count;
}