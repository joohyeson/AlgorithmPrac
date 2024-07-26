function solution(my_string) {
    const arr=[];
    
    [...my_string].map((str)=>!arr.includes(str)&&arr.push(str))
    return arr.join("");
}