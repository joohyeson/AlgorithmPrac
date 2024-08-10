function solution(numbers) {
    let arr=[...numbers];
    let answers=[];
    let visited=Array(arr.length).fill(0)
    const test=(str)=>{
        if(str!==''){
            answers.push(str)
        }
        if(str.length===arr.length){
            return 
        }
        
        for(let i=0; i<arr.length; i++){
            if(visited[i]===0){
                visited[i]=1;
                test(str+arr[i]);
                visited[i]=0;
            }
        }
    }
    test('')
    
    const a=[...new Set(answers.map((s)=> Number(s)))]
    
    // 소수찾기
    let count=0;
    
    a.forEach((num)=>{
        if(num===0||num===1){
            count++;
        }
        for(let i=2; i<num; i++){
            if(num%i===0){
                count++;
                break;
            }
        }
    })
    
    return  a.length-count;
}