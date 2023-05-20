function solution(list){
    let hour=parseInt(list[0].split(' ')[0]);
    let minute=parseInt(list[0].split(' ')[1]);

    let needHour=parseInt(list[1]/60);
    let needMinute=parseInt(list[1]%60);


    if((minute+needMinute)/60>=1){
        needHour+=1;
    }

    minute=parseInt((minute+needMinute)%60);

    hour=parseInt((hour+needHour)%24)

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

        if(count===2){
            rl.close();
        }
}).on("close", function() {
    //for(let i=0; i<list.length; i++){
        solution(list);
    //}
    process.exit();
});
