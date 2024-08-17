function solution(word) {
    let a=['A', 'E', 'I', 'O', 'U']
    let arr=[[...a]]

    
    
    for(let length=1; length<=4; length++){
        arr.push(arr[length-1].flatMap((s)=> a.flatMap((r)=> s+r)))
    }

    return [...new Set(arr.join().split(","))].sort((a, b)=> a>b? 1:-1).indexOf(word)+1;
}