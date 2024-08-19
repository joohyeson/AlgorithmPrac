function solution(s) {
    
    
    var answer = s.split(" ").map((str)=>{
        return str.split("").map((st, index)=> index%2===0? st.toUpperCase(): st.toLowerCase()).join("")
    }).join(" ");
    return answer;
}