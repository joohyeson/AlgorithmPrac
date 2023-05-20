let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');

let arr=input.slice(0, 10).map(Number);

let map=new Map();

arr.map((value)=>{
    map.set(parseInt(value%42),0);
})
// console.log(arr);
// console.log(map);
console.log(map.size);
