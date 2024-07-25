function factorial(n){
    return n>=2? n*factorial(n-1):1
}

function solution(n) {
    let result=1;
    for(let i=2; i<=n;i++){
        result*=i
        
        if(result>n) {
            return i-1
        }
    }
    
    return n
}