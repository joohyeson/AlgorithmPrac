function solution(price, money, count) {
    var answer = -1;

    let sum=0;
    
    for(let i=1; i<=count; i++){
        sum+=i;
    }

    return Math.max(0, price*sum-money);
}