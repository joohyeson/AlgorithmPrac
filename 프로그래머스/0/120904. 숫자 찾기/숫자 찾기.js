function solution(num, k) {
    var index = [...num.toString()].indexOf(k.toString());
    return index===-1? -1: index+1;
}