function solution(numlist, n) {
    
    return numlist.sort((a,b)=> a-b).sort((a, b)=> Math.abs(a-n)>Math.abs(b-n)?1: -1)
    
}