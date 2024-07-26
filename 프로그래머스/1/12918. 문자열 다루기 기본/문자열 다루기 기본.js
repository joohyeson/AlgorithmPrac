function solution(s) {
    var answer = true;
    const arr=[...s];
    
    if(arr.length!==4&&arr.length!==6){
            return false
    }
    
    return arr.findIndex((str)=>isNaN(str))===-1? true:false;
    

}