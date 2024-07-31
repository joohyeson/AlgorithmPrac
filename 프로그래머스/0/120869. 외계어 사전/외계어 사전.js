function solution(spell, dic) {

    let answer=0;
    for(let d of dic){
        const obj={};

        for(let s of spell){
            Object.assign(obj, {[s]: 0})
        }
        
        d.split("").forEach((x)=>!isNaN(obj[x])&& obj[x]++)
        Object.values(obj).every((o)=> o===1)&& answer++
    }
    
    return answer? 1: 2;
}