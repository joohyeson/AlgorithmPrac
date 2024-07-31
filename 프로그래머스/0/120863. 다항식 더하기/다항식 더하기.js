function solution(polynomial) {
    const arr=polynomial.split(" + ");
    
    const answer=arr.reduce((acc, cur)=>{
        if(cur.includes('x')){
            const current=cur.replace('x',"")
            acc[0]+= cur.replace('x',"")===''? 1: Number(current)
        }else{
            acc[1]+=Number(cur)
        }
        
        return acc;
    },[0,0])

    const [x,y]=answer;
    
    if(x===0){
        return y.toString();
    }
    
    if(y===0){
        return x===1? 'x': `${x}x`
    }
    
     return x===1? `x + ${y}`: `${x}x + ${y}`

}