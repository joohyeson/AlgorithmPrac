function solution(s)
{
    let st=[s[0]]
   for(let i=1; i<s.length; i++){
      if(st.length===0){
          st.push(s[i])
      }else{
          let comp= st.pop()
          if(comp!==s[i]){
              st.push(comp);
              st.push(s[i])
          }
      }
   }
    
    return st.length===0? 1: 0
}