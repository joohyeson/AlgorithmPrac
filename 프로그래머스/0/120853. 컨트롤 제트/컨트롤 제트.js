function solution(s) {
    const arr=s.split(" ");
    const answer=[]
    
    arr.map((str)=>{
        if(str==='Z'){
            answer.pop()
        }else{
            answer.push(str)
        }
    })
    return answer.reduce((acc, cur)=>acc+Number(cur),0);
}