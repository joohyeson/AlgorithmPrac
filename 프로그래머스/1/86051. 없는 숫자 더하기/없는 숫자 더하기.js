function solution(numbers) {
    let obj={};
    
    for(let num of numbers){
        Object.assign(obj, {[num]: 1})
    }
    let answer=0;
    for(let i=0; i<=9; i++){
        if(isNaN(obj[i])){
            answer+=i
        }
    }
    
    
    return answer;
}