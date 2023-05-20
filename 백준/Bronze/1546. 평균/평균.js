let fs=require('fs');
let lines=fs.readFileSync('/dev/stdin').toString().split('\n');

let examCount=Number(lines[0]);
let scores=lines[1].split(' ').map(Number);

// 최댓값 고르기
const max=Math.max(...scores);
// map으로 점수 변경
const newScore=scores.map((value)=> (value/max*100));
// 새 평균 구하기
let sum=0;

newScore.forEach((value)=>sum+=value)
console.log(sum/examCount);

