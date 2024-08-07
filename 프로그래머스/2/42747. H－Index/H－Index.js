function solution(citations) {
    
    let max=0;
    for(let citation of citations){
        max=Math.max(max, citation)
    }
        
    for(let i=max; i>=0; i--){
        let over=0;
        for(let citation of citations){
            if(i<=citation){
                over++
            }      
        }
        
        if(over>=i){
            return i;
        }
    }
    return 0
}