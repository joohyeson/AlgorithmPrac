function find_small(num1, num2){
    let lcd=1;
    for(let itr=Math.min(num1, num2); itr>=1; itr--){
        if( Math.floor(num1%itr)===0&&Math.floor(num2%itr)===0){
            lcd=itr;
            break;
        }
    }
    
    return lcd;
}

function solution(numer1, denom1, numer2, denom2) {
  const lcd=denom1*denom2;
  let answer=[denom1*numer2+denom2*numer1, lcd];
    
  const answer_lcd=find_small(answer[0], lcd)
  return [answer[0]/answer_lcd, lcd/answer_lcd]
}