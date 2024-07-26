function solution(my_string) {
    var answer = '';
    return [...my_string].filter((str)=>!['a', 'e', 'i', 'o', 'u'].includes(str)).join("");
}