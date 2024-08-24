function solution(n) {
    const target=n.toString(2).split("").filter((s)=> s==='1').length;
    for(let i=n+1; i<=1000000; i++){
        if(i.toString(2).split("").filter((s)=> s==='1').length===target){
            return i;
        }
    }
    return target;
}