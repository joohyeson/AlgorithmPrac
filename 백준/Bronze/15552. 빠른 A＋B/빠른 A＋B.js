let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');

let count=Number(input[0]);

let string=''
for(let i=0; i<count; i++){
    let numbers=input[i+1].split(' ').map(Number);
    string+=numbers[0]+numbers[1];
    string+='\n';
}

console.log(string);