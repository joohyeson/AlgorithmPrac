function solution(scoville, K) {
    let s=scoville.sort((a,b)=> a-b);
    let count=0;
    let now=0;
    
    if(s[0]>=K){
        return 0;
    }
    
    while(s.length>2){
        count++;

        const sortArr=[s.shift(), s.shift(), s.shift()].sort((a,b)=> a-b);
                
        const now=sortArr.shift()+sortArr.shift()*2;
        sortArr.unshift(now);

        if(now>=K){
            return count;
        }else{
            sortArr.forEach(((sort)=> s.unshift(sort)))
        }
    }
    
    if(s.length===2){
        if((s[0]+s[1]*2)>=K){
            return count+1;
        }
    }
    
    if(s.length===1){
        if(s[0]>=K){
            return count+1;
        }
    }
    
    return -1;
    
}