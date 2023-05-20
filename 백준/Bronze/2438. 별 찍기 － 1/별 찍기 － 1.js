function solution(list){
    const num=Number(list[0]);

    for(let i=1; i<=num; i++){
        for(let j=0; j<i; j++){
            process.stdout.write('*');
        }
        console.log();

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
