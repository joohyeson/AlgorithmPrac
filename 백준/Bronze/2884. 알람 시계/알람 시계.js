function solution(list){
    let hour=parseInt(list[0].split(' ')[0]);
    let minute=parseInt(list[0].split(' ')[1]);

    if(minute<45){
        if(hour===0){
            hour=23;
        }else{
            hour-=1;
        }

        minute=minute+15;
    }else{
        minute-=45;
    }

    console.log(hour, minute);

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
