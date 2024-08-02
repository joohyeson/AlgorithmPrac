function solution(chicken) {
    let answer=0;
    let coupons=0;
    while(chicken>=10){
        const next=Math.floor(chicken/10)
        const coupons=Math.floor(chicken%10)
        answer+=next
        chicken=next+coupons
    }

    return answer;
}