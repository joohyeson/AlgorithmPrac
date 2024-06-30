function solution(board) {
    // visited 저장
    let m=board.length;
    let n=board[0].length;
    
    let visited=board.map(innerArray => innerArray.slice());
    let safe=m*n;
    
    // 지뢰 있는 곳들 모두 돌며 visited에 표시
    board.map((boardX, indexX)=>{
        boardX.map((boardY, indexY)=>{
            if(boardY===1){
                safe--;
                const testZone=[[indexX-1, indexY-1],
                               [indexX-1, indexY+1],
                               [indexX+1, indexY-1],
                               [indexX+1, indexY+1],
                               [indexX+1, indexY],
                               [indexX, indexY+1],
                               [indexX-1, indexY],
                               [indexX, indexY-1]]
                
                //console.log(indexX, indexY,visited)
                testZone.map((test)=>{
                    if(test[0]>=0&&test[1]>=0&&test[0]<m&&test[1]<n){
                    if(visited[test[0]][test[1]]===0){
                       visited[test[0]][test[1]]=1;
                       safe--;
                    }
                }
            })
             
            }
        })
    })
    // visited의 0인 개수 합 반환

    return safe;
}