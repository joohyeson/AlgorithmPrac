function solution(lines) {
   let line = new Array(200).fill(0);
    
    lines.map((l)=>{
        for(let i=l[0]; i<l[1]; i++){
            line[i+100]++;
        }
    })
    
    return line.filter((o)=> o>=2).length;
}