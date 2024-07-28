function solution(dots) {
    const d1=[[0,1],[2,3]];
    const d2=[[0,2],[1,3]];
    const d3=[[0,3],[1,2]];
    const maps=[d1,d2, d3]
    let ans=0;
    maps.map((map)=>{
        const [[x1,x2],[y1,y2]]=map
        console.log(((dots[x2][1]-dots[x1][1])/(dots[x2][0]-dots[x1][0])));
        console.log(((dots[y2][1]-dots[y1][1])/(dots[y2][0]-dots[y1][0])))
        if(((dots[x2][1]-dots[x1][1])/(dots[x2][0]-dots[x1][0]))===((dots[y2][1]-dots[y1][1])/(dots[y2][0]-dots[y1][0]))){
        ans++;
    }
    
    } )
    return ans?1:0;
}