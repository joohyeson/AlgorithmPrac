function solution(s) {
    const obj={}
    for(let i of s){
        if(isNaN(obj[i])){
            obj[i]=1;
        }else{
            
        obj[i]+=1
        }
    }
 
   
    
    const ans=Object.entries(obj).filter((value)=>value[1]===1).map((v)=>v[0])
    return ans.sort().join("");
}