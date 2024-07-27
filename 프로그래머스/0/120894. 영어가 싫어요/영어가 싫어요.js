function solution(numbers) {
    const arr=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
 
    
    
    return Number(arr.reduce((acc, cur, i)=> acc.replaceAll(cur,i ), numbers))
}