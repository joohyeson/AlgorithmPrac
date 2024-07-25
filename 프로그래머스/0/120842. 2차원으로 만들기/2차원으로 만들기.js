function solution(num_list, n) {
    var answer = [];
    
    const itrLength=num_list.length/n;

    [...Array(itrLength).keys()].map(()=>{
       answer.push(num_list.splice(0, n))
   })
    
    return answer;
}