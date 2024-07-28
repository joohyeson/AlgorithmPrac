function solution(n) {
    // n*n의 2차원 배열을 만든다.
    const arr=Array.from({ length: n }, () => Array(n).fill(-1));
   const directions=[[0,1], [1,0],[0,-1], [-1,0]];
    let direction=0;
    let point=[0,0]

    for(let i=1; i<=n*n; i++){
        const [x,y]=point
        const [nextX, nextY]=directions[direction%4]
        
        arr[x][y]=i;
        if(x+nextX>n-1||y+nextY>n-1||x+nextX<0||y+nextY<0||arr[x+nextX][y+nextY]!==-1){
            
            direction++;
            const [nx, ny]=directions[direction%4];
            point=[x+nx, y+ny]
        }else{
            point=[x+nextX, y+nextY]
        }  
    }
    return arr;
}