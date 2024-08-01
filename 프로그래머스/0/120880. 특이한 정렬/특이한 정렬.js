function solution(numlist, n) {
    const arr=[]
    numlist.sort((a,b)=> a-b)
    for(let i of numlist){
        arr.push([i, i-n])    
    }
    
    
    
    arr.sort((a, b)=> Math.abs(a[1])>Math.abs(b[1])?1: -1)
    
    console.log(arr)
    return arr.map((a)=> a[0])
}