function solution(maps) {
    const m=maps.length;
    const n=maps[0].length;
    
    const needVisit=[[0,0,1]];
    
    const visited=maps;
    visited[0][0]=0;
    
    let minLength=10e9

    
    while(needVisit.length>0){
        const [x,y, count]=needVisit.shift();

       if(x===m-1&&y===n-1){
            return count;
        }
        
        const shouldVisit=[[x+1, y, count+1],
                          [x, y-1, count+1],
                          [x-1, y, count+1],
                          [x, y+1, count+1]]
                
        shouldVisit.map((visit)=> {
      
            if(visit[0]>=0&&visit[0]<=m-1&&visit[1]>=0&&visit[1]<=n-1){
                        
                if(visited[visit[0]][visit[1]]===1){      
                    needVisit.push(visit)
                    visited[visit[0]][visit[1]] = 0
                }
            }
        })
                
    }
    return -1;
}