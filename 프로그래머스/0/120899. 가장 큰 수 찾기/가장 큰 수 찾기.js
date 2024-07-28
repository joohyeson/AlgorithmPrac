function solution(array) {
    let max=0;
    for(let i of array){
        max=Math.max(max, i)
    }
    return [max,array.indexOf(max)];
}