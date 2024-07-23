function solution(hp) {
    let answer=0;
[5,3,1].map((i)=>{ 
   answer+=Math.floor(hp/i);
   hp-=Math.floor(hp/i)*i;
})

    return answer;
}