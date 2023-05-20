function solution(list){
    const num=Number(list[0]);

    for(let i=1; i<=9; i++){
        console.log(num, '*', i, "=", num*i);
    }

    

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

        if(count===1){
            rl.close();
        }
}).on("close", function() {
    //for(let i=0; i<list.length; i++){
        solution(list);
    //}
    process.exit();
});
