function solution(array, n) {
let obj={}
   array.map((num, i)=>Object.assign(obj, {[num]: Math.abs(num-n)}) )
    const arr=Object.values(obj).sort((a,b)=>a-b)
    const ans=Object.keys(obj)[Object.values(obj).indexOf(arr[0])]

    return  Number(ans)
    
}