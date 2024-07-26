function solution(sides) {
    sides.sort((a,b)=>b-a);
    const [x,y,z]=sides
    return x<y+z? 1:2
}