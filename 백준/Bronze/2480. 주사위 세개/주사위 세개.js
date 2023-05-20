function solution(list){
    const nums=list[0].split(' ').map((value)=>parseInt(value));

    let map = new Map();
    for(let i=0; i<nums.length; i++){
        if(map.get(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }

    if(map.size===3){
        // 모두 다 다른 경우
        console.log(Math.max(...nums)*100);

    }else if(map.size===2){
        //1,000원+(같은 눈)×100
        map.forEach((value, key)=>{
            if(value===2){
                console.log(key*100+1000);
                return;
            }
        })
        

    }else{
        //10,000원+(같은 눈)×1,000
        map.forEach((value, key)=>{
            console.log(key*1000+10000)
        })

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
