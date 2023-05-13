function recur(start, sum){

    numArr.set(sum, 1);

    if(start===arr.length-1){
        return;
    }

    for(let i=start+1; i<arr.length; i++){
        recur(i, sum+arr[i]);
    }
}

function solution(lines){
    arr=lines[1].split(' ').map(el=>parseInt(el));
    // 숫자 1-100000 arr
    for (let i = 1; i <= 2000000; i++) {
        numArr.set(i, 0);
    }
    
    // 부분 순열
    for(let i=0; i<arr.length; i++){
        recur(i, arr[i]);
    }

    // 가장 작은 수 구하기
    for(let j=1; j<=2000000; j++){
        if(numArr.get(j)===0){
            console.log(j);
            break;
        }
    }

}

let arr=[];
let numArr=new Map();

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

        if(count===2){
            rl.close();
        }
}).on("close", function() {
    //for(let i=0; i<list.length; i++){
        solution(list);
    //}
    process.exit();
});
