function solution(id_pw, db) {
    const obj={};
    const [id, pw]=id_pw
    for(let i of db){
        Object.assign(obj,{[i[0]]: i[1]})
    }
    
    if(!isNaN(obj[id])){
        if(obj[id]===pw){
            return 'login'
        }
        return 'wrong pw'
        
    }
    
    return 'fail'
    
    return answer;
}