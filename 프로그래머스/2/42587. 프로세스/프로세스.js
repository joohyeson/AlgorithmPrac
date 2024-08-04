function solution(priorities, location) {
    const org=priorities.map((p,i)=> [i, p]);
    const answer=[]
    while(org.length>0){
        const target=org.shift();
        answer.push(target)
        for(let i of org){
            if(i[1]>target[1]){
                org.push(target)
                answer.pop(target)
                break;
            }
        }
    }

    
    return answer.findIndex((a)=> a[0]===location)+1;
}