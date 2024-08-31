function solution(n, arr1, arr2) {
    var answer = [];
    
    let newArr=arr1.map((num, idx)=> {
        const ans=(num|arr2[idx]).toString(2);
        const replace=ans.replaceAll('1', '#').replaceAll('0', ' ');
        return ans.length===n? replace: ' '.repeat(n-ans.length)+replace
    })
    return newArr
}