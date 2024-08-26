function solution(food) {
    var answer = '';
    
    for(let i=1; i<food.length; i++){
        answer+=i.toString().repeat(food[i]/2)
    }
    const rev=answer.split("").reverse().join("");
    return answer+'0'+rev;
}