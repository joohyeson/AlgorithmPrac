function solution(list){
    const first=parseInt(list[0]);
    const second=parseInt(list[1]);

    console.log(first*(second%100%10));
    console.log(first*parseInt((second%100)/10));
    console.log(first*parseInt(second/100));
    console.log(first*second);
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

        if(count===2){
            rl.close();
        }
}).on("close", function() {
    //for(let i=0; i<list.length; i++){
        solution(list);
    //}
    process.exit();
});
