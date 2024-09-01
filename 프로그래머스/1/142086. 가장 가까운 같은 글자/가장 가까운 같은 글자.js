function solution(s) {
    // obj에 알파벳과 위치 저장
    // 현재 알파벳위 위치와 비교 후 업데이트
    let obj={};
    
    var answer = [];
    s.split("").forEach((str, index)=>{
        if(str in obj){
            answer.push(index-obj[str])
            obj[str]=index;
        }else{
            answer.push(-1);
            obj[str]=index
        }
    })
    return answer;
}