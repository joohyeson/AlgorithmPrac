function solution(n, m) {

    const min=(n, m)=>{
        return n===0? m: min(m%n, n)
    }
    
    const max=(min)=>{
        return n*m/min
    }
    var answer = [];
    return [min(n,m),max(min(n,m))];
}