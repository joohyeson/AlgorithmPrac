function solution(numbers, direction) {
    const d={
        "right": -1,
        "left":1
    }
    
    var answer = [];
    
    console.log((-1%3))
    
    numbers.map((_, i)=>answer.push(numbers[((numbers.length+i+d[direction]))%numbers.length]))
    return answer;
}