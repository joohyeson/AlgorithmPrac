function solution(arr) {
    let min=Number.MAX_SAFE_INTEGER
    
    arr.forEach((a)=> min=Math.min(min, a))
    const answer=arr.filter((a)=> a!==min)
    return answer.length? answer: [-1];
}