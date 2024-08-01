function solution(id_pw, db) {
    const map=new Map(db)
    const [id, pw]=id_pw
   
    
    if(map.has(id)){
        if(map.get(id)===pw){
            return 'login'
        }
        return 'wrong pw'
        
    }
    
    return 'fail'
    
    return answer;
}