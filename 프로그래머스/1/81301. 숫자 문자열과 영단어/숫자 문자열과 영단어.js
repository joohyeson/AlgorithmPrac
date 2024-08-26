function solution(s) {
    const arr=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    
    arr.forEach((a, index)=> {
        s=s.replaceAll(a,index)
    })
    
    return +s;
}