function solution(nums) {
    var answer = [...new Set(nums)];
    return Math.min(Math.floor(nums.length/2),answer.length);
}