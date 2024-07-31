function solution(numbers) {
    const arr=numbers.sort((a,b)=> b-a)
    return Math.max(arr[0]*arr[1], arr[arr.length-1]*arr[arr.length-2]);
}