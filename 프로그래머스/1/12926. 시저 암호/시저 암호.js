function solution(s, n) {
    
    var answer = s.split(" ").map((s)=> s.split("").map((s)=>{
        const cur=s.charCodeAt()
        if(cur>="a".charCodeAt()){
             let ans=String.fromCharCode(cur+n).charCodeAt()
            let last="z".charCodeAt()
            
            //console.log(cur, n, ans, last)
            if(ans>last){
                return String.fromCharCode(ans-26)
            }else{
                return String.fromCharCode(ans)
            }

        }else{
            let ans=String.fromCharCode(cur+n).charCodeAt()
            let last="Z".charCodeAt()
            
           // console.log(cur, s, ans, last)
            if(ans>last){
                return String.fromCharCode(ans-26)
            }else{
                return String.fromCharCode(ans)
            }
        }
    }).join("")).join(" ");
    return answer;
}