// 24,16 = 16,8 = 8,0
function find_gcd(num1, num2){
    // 0이 될때까지 나눈다.
    return num2===0? num1: find_gcd(num2, num1%num2)
}

function solution(numer1, denom1, numer2, denom2) {
  const denom=denom1*denom2;
    const number=denom1*numer2+denom2*numer1;

  const gcd=find_gcd(number, denom)
  return [number/gcd, denom/gcd]
}