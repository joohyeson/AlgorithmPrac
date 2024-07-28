function solution(my_string) {
    let numStack=[];
    let itrStack=[];
    
    my_string.split(" ").forEach((s)=>{
        if(s==="+"||s==="-"){
            itrStack.push(s)
        }else{
            numStack.push(Number(s))
        }
        
        if(itrStack.length>0&&numStack.length>=2){
            const itr=itrStack.pop();
            const num2=numStack.pop();
            const num1=numStack.pop();
            
            numStack.push(itr==='-'?num1-num2: num1+num2)
        }
    })
    return numStack[0];
}