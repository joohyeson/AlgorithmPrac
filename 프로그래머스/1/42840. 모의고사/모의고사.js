function solution(answers) {
    const [a,b,c]=[[1,2,3,4,5],[2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    let an=[0,0,0]
    
    answers.map((answer, i)=>{
        answer===a[i%a.length]&&an[0]++
        answer===b[i%b.length]&&an[1]++
        answer===c[i%c.length]&&an[2]++
    })
    let max=0;
    for(let a of an){
        max=Math.max(a, max)
    }
    let answer=[]
    for(let i=0; i<an.length; i++){
        if(an[i]===max){
            answer.push(i+1)
        }
    }
    
    
    
    return answer;
}