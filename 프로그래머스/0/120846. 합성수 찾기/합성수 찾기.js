function solution(n) {
    //숫자 저장하는 곳
    const numbers=[]
    for(let i=1; i<=n; i++){
        let count=0;
        for(let j=1; j<=i;j++){
            if(Math.floor(i%j)===0){
                count+=1;
            }
            
            if(count>=3){
                numbers.push(i)
                break;
            }
        }
    }
    return numbers.length;
}