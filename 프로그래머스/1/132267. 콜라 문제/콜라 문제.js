function solution(a, b, n) {
    let bottle=n;
    let answer=0;
    while(bottle>=a){
        answer+=Math.floor(bottle/a)*b;
        console.log(Math.floor(bottle/a)*b)
        bottle=Math.floor(bottle/a)*b+bottle%a;


    }
    return answer;
}