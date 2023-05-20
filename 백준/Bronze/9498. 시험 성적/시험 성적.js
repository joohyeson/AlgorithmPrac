function solution(list){
    const num=parseInt(list[0]);

    if(num>=90)console.log('A');
    else if(num>=80) console.log('B');
    else if(num>=70) console.log('C');
    else if(num>=60) console.log('D');
    else console.log('F');
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
