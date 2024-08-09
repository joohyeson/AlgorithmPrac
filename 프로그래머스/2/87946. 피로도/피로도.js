

function solution(k, dungeons) {
    const visited=Array(dungeons.length).fill(0);
    let answer=0;
    const dfs=(k, cnt)=>{
        answer = Math.max(cnt, answer)
       
        for(let i=0; i<dungeons.length; i++){
            const [min, use]=dungeons[i];
            
            if(min<=k&&visited[i]===0){
                visited[i]=1;
                dfs(k-use, cnt+1);
                visited[i]=0;
            }
        }
    }
    dfs(k, 0)
    return answer;
   
   
}