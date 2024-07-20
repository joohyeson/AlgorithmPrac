function solution(array) {

    const arr=array.sort((a,b)=>a-b);
    // {num:count}
    const map={}
    array.map((num)=>{
        if(Object.keys(map).includes(num.toString())){
             map[num]+=1;
        }else{
            map[num]=1;
        }
    })
    
    console.log(map)
    
    const values=Object.values(map);
    let answer=0;
    

    for(let i=0; i<values.length;i++){        
        answer=Math.max(values[i], answer);
    }
    
    console.log(answer)
    // 중복 여부 확인
    
    let sameNumCount=0;
    for(let i=0; i<values.length;i++){        
       if(answer===values[i]){
           sameNumCount++;
       }
    }
    
    if(sameNumCount>=2){
        return -1;
    }
    
    for(let i=0; i<values.length;i++){        
       if(answer===values[i]){
           return Number(Object.keys(map)[i])
       }
    }
    

}