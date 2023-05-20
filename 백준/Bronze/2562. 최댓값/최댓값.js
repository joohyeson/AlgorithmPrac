let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');

let max=0;
let maxIdx=0;

for(let i=0; i<9;i++){
    if(Number(input[i])>max){
        max=Number(input[i]);
        maxIdx=i+1;
    }
}


console.log(max);
console.log(maxIdx);