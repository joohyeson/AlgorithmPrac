function solution(x) {
    const l=x.toString().split("").reduce((acc, cur)=> acc+Number(cur),0);
    return x%l===0;
}