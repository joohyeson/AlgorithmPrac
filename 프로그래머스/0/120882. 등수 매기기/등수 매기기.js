function solution(score) {
    const arr=score.map(([en, ma])=> (en+ma)/2)
    const counts=[...arr]
    counts.sort((a,b)=> b-a)

    for(let i=0; i< arr.length; i++){
        arr[i]=counts.indexOf(arr[i])+1
    }
    
    return arr;
}