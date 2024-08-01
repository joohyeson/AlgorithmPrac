function max(num1, num2){
    return num2=== 0? num1:max(num2, num1%num2)
}

function solution(a, b) {
    b/=max(a,b)
    while(b>=2){
        if(b%5===0){
            b/=5;
        }else{
            if(b%2===0){
                b/=2;
            }else{
                break;
            }
        }
    }
    

    return b===1? 1: 2;
}