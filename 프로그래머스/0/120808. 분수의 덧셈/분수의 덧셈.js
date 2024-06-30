function find_lcd(denom1, denom2){
    let lcd=1;
    for(let itr=Math.min(denom1, denom2); itr<=denom1*denom2; itr++){
        if( Math.floor(itr%denom1)===0&&Math.floor(itr%denom2)===0){
            lcd=itr;
            
            break;
        }
    }
    
    return lcd;
}

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

function get_matrix_value(denom, lcd){
    return (lcd/denom)
    
}

function solution(numer1, denom1, numer2, denom2) {
  const lcd=denom1*denom2;
  let answer=[numer1*(lcd/denom1)+numer2*(lcd/denom2), lcd];
    
    console.log(answer)
  const answer_lcd=find_small(answer[0], lcd)
  return [answer[0]/answer_lcd, lcd/answer_lcd]
}