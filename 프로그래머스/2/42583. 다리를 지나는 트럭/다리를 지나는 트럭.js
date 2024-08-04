function solution(bridge_length, weight, truck_weights) {
    const arr=truck_weights.map((weight)=> [weight, bridge_length])
    let onb=[]
    var answer = 0;
    let nowWeight=0;
    
    while(arr.length>0){
        answer++;
        onb.forEach((t)=> t[1]--)
        onb=onb.filter((t)=> t[1]!==0);
        
        const target=arr.shift();
        
        if((onb.reduce((acc, cur)=> acc+cur[0],0)+target[0])>weight||onb.length>=bridge_length){
            arr.unshift(target)
        }else{
            onb.push(target);
        }
        
    }
    
    
    let max=0;
    for(let i of onb){
        max=Math.max(max, i[1])
    }
    return answer+max;
}