function solution(dots) {
    const d1=[[0,1],[2,3]];
    const d2=[[0,2],[1,3]];
    const d3=[[0,3],[1,2]];
    const maps=[d1,d2, d3]
    let ans=0;
    
    for(let i=0; i<maps.length; i++){
        const [[x1,x2],[y1,y2]]=maps[i]
        if(((dots[x2][1]-dots[x1][1])/(dots[x2][0]-dots[x1][0]))===((dots[y2][1]-dots[y1][1])/(dots[y2][0]-dots[y1][0]))){
        return 1;
    }
    }
   
    return 0;
}