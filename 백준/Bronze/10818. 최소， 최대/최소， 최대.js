let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');

let count=Number(input[0]);
let arr=input[1].split(' ').map(Number);

let max=-1000000;
let min=1000000;

arr.map((value)=>{
    if(value<min){
        min=value;
    }

    if(value>max){
        max=value;
    }
})

console.log(min, max);