function solution(i, j, k) {
   let string='';
    
    for(let a=i; a<=j; a++){
        string+=a
    }
    return string.split(k).length-1;
}