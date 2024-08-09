function test(left,num, numArr){
    let filter=left.filter((a)=> num!==a)
    
    if(filter.length===0){
        return [[...numArr, num]]
    }
    
    let answer=[]
    for(let f of filter){
          answer=answer.concat(test(filter, f, [...numArr, num]))
    }
    
    return answer
}

function solution(k, dungeons) {
    // 모든 조합을 찾는다.
    // 첫 숫자 뽑음. 해당 숫자 제거 후 나머지 숫자 뽑음. 남은 숫자가 없을 때까지.
    // 이걸 재귀로
    let cases=[]
    for(let i=0; i< dungeons.length; i++){
        cases=cases.concat(test([...Array(dungeons.length).keys()], i, []))
    }
    
    let max=0;
    for(let i=0; i<cases.length; i++){
        const cas=cases[i];
        let canDoCount=0;
        let heal=k;
        
        for(let c of cas){
            const [min, use]=dungeons[Number(c)];
            if(min<=heal){
                heal-=use;
                canDoCount++;
            }
        }
        max=Math.max(max, canDoCount)
        
    }
    
    // 012 021 102 120 201 210
    // 각 가능성 중 가장 큰 수 반환(모두 가능한 경우가 나왔다면 바로 return)
    return max;
}