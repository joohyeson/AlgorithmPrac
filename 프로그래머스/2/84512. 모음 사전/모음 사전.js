function solution(word) {
    // length별로 저장
    let arr=[['A', 'E', 'I', 'O', 'U'],[],[],[],[]]
    let a=['A', 'E', 'I', 'O', 'U']
    
    
    for(let length=1; length<=4; length++){
        arr[length]=arr[length-1].flatMap((s)=> a.flatMap((r)=> {
            return s+r
        })) 
    }

    return [...new Set(arr.join().split(","))].sort((a, b)=> a>b? 1:-1).indexOf(word)+1;
}