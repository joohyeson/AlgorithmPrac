function solution(A, B) {
    if(A===B){
        return 0
    }
    for(let s=0; s<B.length; s++){
        if(A===B){
            return s;
        }
        
        const first=A.slice(0,A.length-1)
        const second=A.slice(A.length-1, A.length)
        A=second+first
    }
    
    return -1;
   
}