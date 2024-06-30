function find_lcd(denom1, denom2){
    let lcd=1;
    for(let itr=Math.min(denom1, denom2); itr<=denom1*denom2; itr++){
        //console.log(itr, Math.floor(denom1%itr), Math.floor(denom2%itr))
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
        //console.log(itr, Math.floor(itr%num1),Math.floor(itr%num2))
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
    
    // if(denom1===1&&denom2===1){
    //     return [numer1+numer2, 1]
    // }
    // 분모의 최소공배수 찾기
    const lcd=find_lcd(denom1, denom2);
    //console.log(lcd)
    // 각 분수의 분모가 최소공배수가 되도록 곱해주기
    const first=get_matrix_value(denom1, lcd);
    const second=get_matrix_value(denom2, lcd);
    // 각 숫자의 합 구하기
    let answer=[numer1*first+numer2*second, lcd]
    
   const answer_lcd=find_small(answer[0], lcd)
   return [answer[0]/answer_lcd, lcd/answer_lcd]
}