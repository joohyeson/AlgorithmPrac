function solution(numbers) {
    const arr=["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
    let comp=""
    let ans=""
    for(let i of numbers){
        if(arr.includes(comp)){
            ans+=arr.indexOf(comp);
            comp=i
        }else{
            comp+=i
        }
    }
    
    
    return Number(ans+arr.indexOf(comp));
}