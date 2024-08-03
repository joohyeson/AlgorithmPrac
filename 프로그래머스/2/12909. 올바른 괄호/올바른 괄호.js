function solution(s){

    const arr=[]
    for(let i of s){
        
        if(i==='('){
            arr.push(i)
        }else{
            if(arr.length>0){
                arr.pop()
            }else{
                return false;
            }
        }
    }
    
    
    return arr.length===0;
}