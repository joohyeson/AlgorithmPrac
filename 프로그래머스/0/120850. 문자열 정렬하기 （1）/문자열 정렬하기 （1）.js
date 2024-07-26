function solution(my_string) {
    var answer = [];
    return [...my_string].filter((str)=>[0,1,2,3,4,5,6,7,8,9].includes(Number(str))).map((str)=>Number(str)).sort()
}