function solution(lines) {
    let obj={}
    for(let i=0; i<=200; i++){
        Object.assign(obj,{[i]:0});
    }
    
    lines.map((line)=>{
        for(let i=line[0]; i<line[1]; i++){
            obj[i+100]++;
        }
    })
    
    return Object.values(obj).filter((o)=> o>=2).length;
}