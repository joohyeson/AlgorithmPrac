

function solution(bin1, bin2) {
    //console.log(bin2num(bin1), bin2num(bin2))
    var answer = parseInt(bin1, 2)+parseInt(bin2, 2);
    return answer.toString(2);
}