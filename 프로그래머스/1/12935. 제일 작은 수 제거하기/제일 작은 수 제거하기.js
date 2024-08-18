function solution(arr) {
    const min=Math.min(...arr)
    const answer=arr.filter((a)=> a!==min)
    return answer.length? answer: [-1];
}