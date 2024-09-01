function solution(k, score) {
    let answer = [];
    let honor=[];
    
    score.forEach((s, index)=>{
        honor.push(s);
        honor.sort((a,b)=> b-a);
        answer.push(honor[Math.min(k-1, index)])
    })
    return answer;
}