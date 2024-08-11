function solution(s) {
    let arr=[...s];
    let count=0;
    let deleted=0;

    while(!(arr.length===1&&arr[0]==='1')){
        let n=arr.filter((a)=> a==='1');
        deleted+=arr.length-n.length
        arr=n.length.toString(2).split("")
        count++;
    }
    
    return [count,deleted];
}