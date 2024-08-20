function solution(s, n) {
    const upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lower='abcdefghijklmnopqrstuvwxyz'
    var answer = s.split(" ").map((s)=> s.split("").map((s)=>{
        const arr=upper.includes(s)? upper: lower;
        const idx=(arr.indexOf(s)+n)%arr.length;
        
       return arr[idx]
    }).join("")).join(" ");
    return answer;
}