function solution(num, total) {
    for(let i=total+num; i>=0; i--){
        const sum=[]
        
        for(let j=0; j<num; j++){
            sum.push(i-j)
        }
        
        console.log(sum.reduce((a,b)=> a+b,0), total)
        if(sum.reduce((a,b)=> a+b,0)===total){
            return sum.sort((a,b)=>a>b?1: -1)
        }
    }

}