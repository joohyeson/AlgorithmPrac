
function solution(progresses, speeds) {
    
    const arr=[]
    let now=Math.ceil((100-progresses[0])/speeds[0]);
    let count=0;
    for(let i=0; i<progresses.length; i++){
        const d=Math.ceil((100-progresses[i])/speeds[i])
        console.log(d, count)
        if(now>=d){
            count++
        }else{
            arr.push(count);
            now=d;
            count=1;
        }
    }
    
    arr.push(count)
    return arr;
}