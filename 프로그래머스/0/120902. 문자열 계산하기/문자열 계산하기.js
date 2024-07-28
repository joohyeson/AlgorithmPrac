function solution(my_string) {
    let numStack=[];
    let itr=1
    
    my_string.split(" ").forEach((s)=>{
        if(s==="-"||s=="+"){
            itr=s==="-"? -1:1
        }else{
            numStack.push(Number(s*itr))
        }
    })
    return numStack.reduce((acc, cur)=> acc+cur,0);
}