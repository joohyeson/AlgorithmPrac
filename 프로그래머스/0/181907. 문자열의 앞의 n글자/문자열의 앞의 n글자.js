function solution(my_string, n) {
    var answer = '';
    return [...my_string].splice(0,n).join("");
}