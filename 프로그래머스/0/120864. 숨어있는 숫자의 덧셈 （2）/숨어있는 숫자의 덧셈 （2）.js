function solution(my_string) {
    const arr=[]
    let cur=''
    for(let s of my_string){
       if(!isNaN(s)){
           cur+=s;
       }else{
            arr.push(cur)
            cur=''
       }
    }
    
    arr.push(cur)
    return arr.filter((s)=> s!=="").reduce((acc, cur)=> acc+Number(cur),0);
}