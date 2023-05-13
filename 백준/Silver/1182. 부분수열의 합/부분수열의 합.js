function recur(start, sum){
    if(targetNum===sum){
        answer++;
    }
    if(start===arr.length-1){
        return;
    }

    for(let i=start+1; i<arr.length;i++){
        recur(i, sum+arr[i]);
    }
}

function solution(lines){
    targetNum=parseInt(lines[0].split(' ')[1]);
    arr=lines[1].split(' ').map(el=>parseInt(el));

    for(let i=0; i<arr.length; i++){
        recur(i, arr[i])
    }

    console.log(answer);
}
let targetNum=0;
let answer=0;
let arr=[];

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
