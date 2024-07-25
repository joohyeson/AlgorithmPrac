function factorial(n){
    return n>=2? n*factorial(n-1):1
}

function solution(n) {
    for(let i=0; i<=n;i++){
        if(factorial(i)>n){
            return i-1
        }
    }
    
    return n
}