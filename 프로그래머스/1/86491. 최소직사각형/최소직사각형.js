function solution(sizes) {
    const s=sizes.map((size)=> size.sort((a,b)=> a-b));
    
    let maxX=0;
    let maxY=0;
    
    s.forEach(([x,y])=> {
        maxX=Math.max(x, maxX);
        maxY=Math.max(y, maxY);
    })
    
    return maxX*maxY
}