function solution(sides) {
    const arr=sides.sort((a,b)=> a-b)
    let answer=0;
    
    for(let i=sides[1]-sides[0]; i<sides[1]; i++){
        answer++;
    }
    
    for(let j=sides[1]+1; j<sides[0]+sides[1]; j++){
        answer++;
    }
    

    return answer;
}