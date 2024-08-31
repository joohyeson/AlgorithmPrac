function solution(n)
{
    let now=n;
    let cnt=0;
    while(now!==0){
        if(now%2===0){
            now/=2
        }else{
            cnt+=1;
            now=(now-1)/2
        }
        

    }
    
    return cnt
}