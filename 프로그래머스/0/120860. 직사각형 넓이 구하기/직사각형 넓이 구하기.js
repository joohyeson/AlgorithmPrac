function solution(dots) {
    var arr = [];
    // 1,4 3,4 1,2 3,2
    const [x1,x2,y1,y2]=dots.sort((a,b)=>a[0]-b[0])
    console.log(x1, x2, y1, y2)
    return (x1[0]-y1[0])*(x1[1]-x2[1]);
}