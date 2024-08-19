function solution(A,B){
    let s1=A.sort((a,b)=> a>b? 1: -1);
    let s2=B.sort((a,b)=> a>b? -1: 1);
    
    let sum=0;
    
    for(let i=0; i<A.length; i++){
     sum+=s1[i]*s2[i]   
    }
    
    return sum;
}