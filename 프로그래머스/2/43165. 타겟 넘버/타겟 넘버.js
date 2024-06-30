function dfs(value, index, numbers, target) {
    if(index>=numbers.length){
        if(value===target){
            return 1;
        }
        return 0;
    }
    
   const num=dfs(value+numbers[index], index+1,numbers, target)
   const num2= dfs(value-numbers[index], index+1,numbers, target)
    
   return num+num2;
}

function solution(numbers, target) {
    var answer = dfs(0,0,numbers,target);

    
    return answer;
}