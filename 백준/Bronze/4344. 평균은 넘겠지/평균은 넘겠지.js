let fs=require('fs');
let input=fs.readFileSync('/dev/stdin').toString().split('\n');

let count=input[0];

for(let i=1; i<=count; i++){
    let arr=input[i].split(' ').map(Number);
    let stCount=arr[0];
    let sum=0;

    for(let j=1; j<=stCount;j++){
        sum+=arr[j];
    }

    let average=(sum/stCount);
    let st=0;

    for(let j=1; j<=stCount;j++){
        if(arr[j]>average){
            st++;
        }
    }

    console.log(`${(st/stCount*100).toFixed(3)}%`)
}

