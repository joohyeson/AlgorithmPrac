function solution(arr1, arr2) {
    var answer = [[]];
    return arr1.map((arr, idx)=> arr.map((a, i)=> a+arr2[idx][i]));
}