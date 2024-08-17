function solution(number, k) { 
    let deleted=0;
    let st=[]
    let i=0;
    
    for(let i=0; i<number.length; i++){
        if(deleted===k){
            st.push(+number[i])
        }else{
            while(st.length>0){
                let comp=st.pop();

                if(comp>= +number[i]||deleted===k){
                    st.push(comp);
                    break;
                }
                deleted++;
            }

            st.push(+number[i])
        }
    }
    
    
    
    return st.splice(0, number.length-(k-deleted)).join("")
}