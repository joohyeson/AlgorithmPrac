function clamp(value, max, min) {
  return Math.min(Math.max(value, min), max);
}

function solution(keyinput, board) {

    const obj={'left':[-1,0],'right': [1,0], 'up': [0,1], 'down': [0,-1]};
    const answer=keyinput.reduce((acc, cur)=>{
        const [x,y]=obj[cur];
        const [nextX, nextY]=[acc[0]+x, acc[1]+y];
        
        acc[0]=clamp(nextX, Math.floor(board[0]/2), -Math.floor(board[0]/2));
        acc[1]=clamp(nextY, Math.floor(board[1]/2), -Math.floor(board[1]/2));
        
        return acc
    },[0,0]);
    
    return answer
}