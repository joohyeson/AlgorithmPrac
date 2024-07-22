function solution(my_string, letter) {
    var answer = '';
    return [...my_string].filter((str)=>str!==letter).join("");
}