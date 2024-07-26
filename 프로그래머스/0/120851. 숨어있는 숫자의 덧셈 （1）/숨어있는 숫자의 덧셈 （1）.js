function solution(my_string) {
    var answer = 0;
    return [...my_string].filter((str)=>!isNaN(str)).reduce((acc, cur)=>Number(cur)+acc, 0);
}