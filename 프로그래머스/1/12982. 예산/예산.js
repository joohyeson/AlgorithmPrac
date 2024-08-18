function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=> a-b);
    
    return d.reduce((acc, cur)=> {
        if(budget-cur>=0){
            budget-=cur
            return acc+1
        }
        return acc
    },0);
}