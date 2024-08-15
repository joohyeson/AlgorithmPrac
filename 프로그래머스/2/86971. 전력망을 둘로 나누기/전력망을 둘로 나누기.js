function solution(n, wires) {    
    let obj={}
    for([now, target] of wires){
        if(obj.hasOwnProperty(now)){
            obj[now].push(target);
        }else{  
           Object.assign(obj, {
            [now]: [target]
        })     
        }
        
        if(obj.hasOwnProperty(target)){
            obj[target].push(now);
        }else{  
           Object.assign(obj, {
            [target]: [now]
        })     
        }
    }

    let min=100;
    for(let i=0; i<n-1; i++){
        const [start, end]=wires[i];
        const visited=Array(n).fill(0)
        const test=(point)=>{
            const canGo=obj[point.toString()];
            visited[point-1]=1;
            for(p of canGo){
                if(visited[p-1]===0&&!(point===start&&p===end)&&!(point===end&&p===start)){
                    test(p);
                }
            }
        }
        test(i+1);
        const an=visited.length-visited.filter((v)=>v===1).length
        
        min=Math.min(Math.abs(an-visited.filter((v)=>v===1).length), min)
    }
    
    return min
}