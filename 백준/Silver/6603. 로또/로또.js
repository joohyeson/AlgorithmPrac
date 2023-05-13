function solution(line){
    const arr=line.split(' ').map(el=>parseInt(el));
    const count=arr[0];
    const numbers=arr.slice(1, count+1);

    // 중복없이 숫자 6개
    for(let i=0; i<count-5; i++){
        for(let j=i+1; j<count-4; j++){
            for(let k=j+1; k<count-3;k++){
                for(let a=k+1; a<count-2;a++){
                    for(let b=a+1; b<count-1;b++){
                        for(let c=b+1; c<count;c++){
                            console.log(numbers[i], numbers[j], numbers[k], numbers[a], numbers[b],numbers[c]);
                        }
                    }
                }
            }  
        }
    }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let list = [];


rl.on('line', function(line) {
    if(line!=='0'){
        list.push(line);
    }else{
        rl.close();
    }
}).on("close", function() {
    for(let i=0; i<list.length; i++){
        solution(list[i]);
        console.log();
    }
    process.exit();
});
