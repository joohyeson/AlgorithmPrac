function solution(s) {
    var answer = s.split(" ").map((sentence)=> {
        const st=sentence.toLowerCase().split("")
        if(st.length===0){
            return ""
        }
       // console.log(st, st[0])
        st[0]=st[0].toUpperCase()
        return st.join("")
    });
    
    return answer.join(" ");
}