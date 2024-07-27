function solution(order) {
    return [...order.toString()].reduce((acc, cur)=> acc+!!(Number(cur)%3===0&&Number(cur)!==0),0);
}