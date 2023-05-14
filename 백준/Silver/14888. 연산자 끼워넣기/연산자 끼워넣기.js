let numbers=[];
let arr=[];
let min=1000000001;
let max=-1000000001;


function calc(start, result){
    if(start>=n-1){
        min=Math.min(min, result);
        max=Math.max(max, result);

        return;
    }

    // 3 4 5
    for(let i=0; i<4; i++){
        let value=0;

        if(arr[i]===0){
            continue;
        }

        switch (i) {
            case 0:
                    value=result+numbers[start+1];
                break;
            case 1:
                //if(arr[i]!==0){
                    value=result-numbers[start+1];
                //}   
                break;
            case 2:
                //if(arr[i]!==0){
                    value=result*numbers[start+1];
                //}   
                break;
            case 3:
                value=~~(result / numbers[start+1]);
                break;
        
            default:
                break;
        }

        arr[i]-=1;

        calc(start+1, value);

        arr[i]+=1;
    }




}

let n=0;
function solution(list){
    //list n=10
    n=parseInt(list[0]);
    numbers=list[1].split(' ').map((el)=>parseInt(el));
    arr=list[2].split(' ').map((el)=>parseInt(el));

    // 10개의 순열 경우의 수 계산(10!)
    // 계산 결과(min, max함수 만들어서 => reduce?) => 3*(10!) 
    calc(0,numbers[0]);

    console.log(max);
    console.log(min);
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let list = [];
let count=0;


rl.on('line', function(line) {
        list.push(line);
        count++;

        if(count===3){
            rl.close();
        }
}).on("close", function() {
    solution(list);
    process.exit();
});